import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { IndexPage } from "./pages/IndexPage";

function App() {
  return (
    <>
      <IndexPage />
      <Analytics />
    </>
  );
}

export default App;
