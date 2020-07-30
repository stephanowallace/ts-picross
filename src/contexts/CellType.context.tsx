import React from "react";

interface ChangeTypeFunc {
  (type: CellType): void;
}

interface CellContextProps {
  type: CellType;
  changeType: ChangeTypeFunc;
}

export const CellContext = React.createContext<CellContextProps>({
  type: "Fill",
  changeType: (type: CellType) => null,
});
