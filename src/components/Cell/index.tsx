import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CellContext } from "../../contexts/CellType.context";

interface IContainerProps {
  state: CellType;
}

const Container = styled.div<IContainerProps>`
  align-items: center;
  background-color: ${({ state }) => (state === "Fill" ? "blue" : "white")};
  border: 2px solid lightgray;
  border-radius: 4px;
  color: ${({ state }) => (state === "Ignore" ? "red" : "blue")};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 24px;
  justify-content: center;
  transition: all 0.25s;
  width: 24px;

  &:hover {
    border: 2px solid black;
  }
`;

const Cell = () => {
  const { type } = useContext(CellContext);
  const [cellState, setCellState] = useState<CellType>("Void");

  const renderContent = () => {
    switch (cellState) {
      case "Ignore":
        return "X";
      case "Doubt":
        return "?";
      default:
        return "";
    }
  };

  return (
    <Container onClick={() => setCellState(type)} state={cellState}>
      {renderContent()}
    </Container>
  );
};

export default Cell;
