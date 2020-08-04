import React from "react";

interface IDrawMatrixContextProps {
  matrix: Array<Array<CellType>>;
  createMatrix: Function;
  setMatrix: Function;
}

export const DrawMatrixContext = React.createContext<IDrawMatrixContextProps>({
  matrix: [],
  createMatrix: () => false,
  setMatrix: () => false,
});
