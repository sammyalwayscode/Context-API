import React from "react";
import Counter from "./Components/Context/Counter";
import { GlobalEnv } from "./Components/Context/Global";

const App = () => {
  return (
    <GlobalEnv>
      <Counter />
    </GlobalEnv>
  );
};

export default App;
