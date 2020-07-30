import React, { useContext, useState } from "react";
import { CellContext } from "../../contexts/CellType.context";

const Cell = () => {
  const { type } = useContext(CellContext);
  const [cellState, setCellState] = useState<CellType>("Void");

  return <button onClick={() => setCellState(type)}>{cellState}</button>;
};

export default Cell;
