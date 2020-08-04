import React, { useContext, useEffect } from "react";
import Cell from "../Cell";
import styled from "styled-components";
import { DrawMatrixContext } from "../../contexts/DrawMatrix.context";
import { countFilledCells } from "../../utils/matrix";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

interface IGridProps {
  columns?: number;
  rows?: number;
}

const Grid: React.FC<IGridProps> = ({ columns = 5, rows = 5 }) => {
  const { matrix, createMatrix, setMatrix } = useContext(DrawMatrixContext);

  useEffect(() => {
    createMatrix(rows, columns);
  }, []);

  const handleCellChange = (x: number, y: number, cellType: CellType) => {
    matrix[x][y] = cellType;
    setMatrix(matrix);
    console.log(">>>>", matrix);
  };

  countFilledCells(["Void", "Fill", "Fill", "Void", "Fill", "Void"]);

  const renderCells = () => {
    return [...Array(rows)].map((_, x) => (
      <Row key={`row-${x}`}>
        {[...Array(columns)].map((_, y) => (
          <Cell
            key={`col-${y}`}
            onChange={(cellType: CellType) => handleCellChange(x, y, cellType)}
          />
        ))}
      </Row>
    ));
  };

  return <Container>{renderCells()}</Container>;
};

export default Grid;
