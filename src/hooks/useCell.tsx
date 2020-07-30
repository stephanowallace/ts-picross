import { useState } from "react";

const useCell = () => {
  const [type, setType] = useState<CellType>("Fill");

  console.log(">>>>", type);

  const changeType = (value: CellType) => {
    console.log(value);
    setType(value);
  };

  return {
    type,
    changeType,
  };
};

export default useCell;
