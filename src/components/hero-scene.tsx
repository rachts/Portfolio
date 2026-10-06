import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import type { MotionValue } from "framer-motion";
import type { Group, Mesh, Points } from "three";

function PointField() {
  const points = useRef<Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(400 * 3);
    let seed = 17;
    for (let i = 0; i < values.length; i += 1) {
      seed = (seed * 9301 + 49297) % 233280;
      values[i] = ((seed / 233280) * 2 - 1) * (i % 3 === 2 ? 1.5 : 3.8);
    }
    return values;
  }, []);
  useFrame(({ clock }) => {
    const attribute = points.current?.geometry.attributes.position;
    if (!attribute) return;
    const array = attribute.array as Float32Array;
    const time = clock.getElapsedTime();
    for (let i = 1; i < array.length; i += 3) array[i] += Math.sin(time * 0.18 + i) * 0.0005;
    attribute.needsUpdate = true;
  });
  return (
    <points ref={points} position={[0, 0, -1]}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} count={400} /></bufferGeometry>
      <pointsMaterial color="#ff5a1f" size={0.018} transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}

function Wireframe({ progress }: { progress: MotionValue<number> }) {
  const group = useRef<Group>(null);
  const { invalidate, pointer } = useThree();
  useFrame(({ camera }) => {
    camera.position.z = 5 + progress.get() * 7;
    camera.rotation.x += (pointer.y * 0.1 - camera.rotation.x) * 0.06;
    camera.rotation.y += (pointer.x * 0.1 - camera.rotation.y) * 0.06;
    camera.lookAt(0, 0, 0);
    if (group.current) group.current.rotation.y += 0.0015;
  });
  useEffect(() => { invalidate(); }, [invalidate]);
  useEffect(() => progress.on("change", invalidate), [invalidate, progress]);
  return (
    <group ref={group} rotation={[0.28, -0.35, 0]}>
      <mesh><icosahedronGeometry args={[1.65, 1]} /><meshBasicMaterial color="#ff5a1f" wireframe transparent opacity={0.68} /></mesh>
      <Float speed={0.45} rotationIntensity={0.12} floatIntensity={0.18}>
        <mesh rotation={[0.2, 0.4, 0]}>
          <torusKnotGeometry args={[0.75, 0.18, 96, 16]} />
          <MeshDistortMaterial color="#343434" metalness={0.86} roughness={0.28} emissive="#ff5a1f" emissiveIntensity={0.22} distort={0.08} speed={0.5} />
        </mesh>
      </Float>
      <Line points={[[-2.8, -1.5, 0], [2.8, -1.5, 0]]} color="#ff5a1f" transparent opacity={0.35} lineWidth={1} dashed dashSize={0.12} gapSize={0.1} />
      <Line points={[[-2.8, 1.5, 0], [2.8, 1.5, 0]]} color="#ff5a1f" transparent opacity={0.22} lineWidth={1} dashed dashSize={0.12} gapSize={0.1} />
    </group>
  );
}

function SceneCleanup() {
  const { gl, scene } = useThree();
  useEffect(() => () => {
    scene.traverse((object) => {
      const mesh = object as Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((material) => material?.dispose());
    });
    gl.dispose();
  }, [gl, scene]);
  return null;
}

export function HeroScene({ progress, active = true }: { progress: MotionValue<number>; active?: boolean }) {
  return (
    <Canvas frameloop={active ? "always" : "never"} dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 35 }} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={["#000000", 6, 14]} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
      <SceneCleanup />
      <PointField />
      <Wireframe progress={progress} />
    </Canvas>
  );
}

export default HeroScene;
