import React from "react";
import Cell from "../Cell";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

interface IGridProps {
  columns?: Number;
  rows?: Number;
}

const Grid: React.FC<IGridProps> = ({ columns = 5, rows = 5 }) => {
  const renderCells = () => {
    return [...Array(rows)].map((_, index) => (
      <Row key={`row-${index}`}>
        {[...Array(columns)].map((_, index) => (
          <Cell key={`col-${index}`} />
        ))}
      </Row>
    ));
  };

  return <Container>{renderCells()}</Container>;
};

export default Grid;
