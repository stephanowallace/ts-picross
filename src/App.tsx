import React from "react";
import "./App.css";
import CellTypeSelector from "./components/CellTypeSelector";
import { CellContext } from "./contexts/CellType.context";
import useCell from "./hooks/useCell";
import Cell from "./components/Cell";

function App() {
  const cell = useCell();

  return (
    <CellContext.Provider value={cell}>
      <div className="App">
        <CellTypeSelector />
        <Cell />
      </div>
    </CellContext.Provider>
  );
}

export default App;
