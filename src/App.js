import React from "react";

import { Reset } from "styled-reset";

import Header from "./components/Header";
import RealBody from "./components/RealBody";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <RealBody />
    </>
  );
}

export default App;
