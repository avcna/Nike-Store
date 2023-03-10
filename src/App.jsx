import React from "react";
import { Hero, Sales } from "./components";
import { heroapi, popularsales, toprateslaes } from "./Data/data";

const App = () => {
  return (
    <div>
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales}/>
        <Sales endpoint={toprateslaes}/>
      </main>
    </div>
  );
};

export default App;
