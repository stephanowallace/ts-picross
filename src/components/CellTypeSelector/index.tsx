import React, { useContext } from "react";
import { CellContext } from "../../contexts/CellType.context";

const CellTypeSelector: React.FC = () => {
  const { changeType } = useContext(CellContext);

  return (
    <div>
      <button onClick={() => changeType("Ignore")}>x</button>
      <button onClick={() => changeType("Fill")}>v</button>
      <button onClick={() => changeType("Doubt")}>?</button>
    </div>
  );
};

export default CellTypeSelector;
