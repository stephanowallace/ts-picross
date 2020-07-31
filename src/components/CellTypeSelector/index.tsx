import React, { useContext } from "react";
import styled from "styled-components";
import { CellContext } from "../../contexts/CellType.context";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 24px;
`;

const Button = styled.button`
  margin-bottom: 10px;
`;

const CellTypeSelector: React.FC = () => {
  const { changeType } = useContext(CellContext);

  return (
    <Container>
      <Button onClick={() => changeType("Ignore")}>x</Button>
      <Button onClick={() => changeType("Fill")}>v</Button>
      <Button onClick={() => changeType("Doubt")}>?</Button>
      <Button onClick={() => changeType("Void")}>-</Button>
    </Container>
  );
};

export default CellTypeSelector;
