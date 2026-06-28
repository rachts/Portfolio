import React, { useEffect, useRef } from 'react';

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    window.addEventListener('resize', syncSize);
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    
    // Light premium theme colors
    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = v_texCoord;
    vec2 mouse = u_mouse / u_resolution;
    
    // Create a fluid, ambient movement
    float t = u_time * 0.15;
    
    // Base light colors (Premium light gray to soft blue tint)
    vec3 color1 = vec3(0.98, 0.98, 0.99); // Off white / canvas
    vec3 color2 = vec3(0.94, 0.95, 0.98); // Soft cool blue tint
    
    // Noise-based plasma effect
    float n = 0.0;
    vec2 p = uv * 3.0;
    n += 0.5 * sin(p.x + t);
    n += 0.25 * sin(p.y + t * 1.2);
    n += 0.125 * sin(p.x + p.y + t * 0.8);
    
    // Interaction influence
    float dist = distance(uv, mouse);
    float glow = smoothstep(0.4, 0.0, dist) * 0.2;
    
    vec3 finalColor = mix(color1, color2, n * 0.5 + 0.5);
    finalColor -= vec3(0.02, 0.02, 0.05) * glow; // Glow follows mouse by subtly darkening
    
    // Subtle grain
    float grain = (noise(uv * u_resolution.xy + u_time) - 0.5) * 0.02;
    finalColor += grain;

    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function cs(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    const vShader = cs(gl.VERTEX_SHADER, vs);
    const fShader = cs(gl.FRAGMENT_SHADER, fs);
    if (!prog || !vShader || !fShader) return;
    
    gl.attachShader(prog, vShader);
    gl.attachShader(prog, fShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let startTime = Date.now();

    function render() {
      if (!gl || !canvas) return;
      if (typeof ResizeObserver === 'undefined') syncSize();
      
      gl.viewport(0, 0, canvas.width, canvas.height);
      
      // If prefers reduced motion, freeze time
      const t = prefersReducedMotion ? 10000 : Date.now() - startTime;
      
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      // If prefers reduced motion, don't loop animation, just render once
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    }
    
    render();

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
