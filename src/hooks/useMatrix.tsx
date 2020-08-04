import { useState } from "react";

import { create } from "../utils/matrix";

const useMatrix = () => {
  const [matrix, setMatrix] = useState<Array<Array<CellType>>>([["Void"]]);

  const createMatrix = (
    rows: number,
    columns: number,
    initialValue: CellType
  ) => {
    const newMatrix = create(rows, columns, initialValue);
    setMatrix(newMatrix);
  };

  return {
    matrix,
    createMatrix,
    setMatrix,
  };
};

export default useMatrix;
