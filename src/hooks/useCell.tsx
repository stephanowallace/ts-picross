import { useState } from "react";

const useCell = () => {
  const [type, setType] = useState<CellType>("Fill");

  const changeType = (value: CellType) => {
    setType(value);
  };

  return {
    type,
    changeType,
  };
};

export default useCell;
