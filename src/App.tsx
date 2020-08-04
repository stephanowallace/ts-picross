import React from "react";
import styled from "styled-components";
import "./App.css";
import CellTypeSelector from "./components/CellTypeSelector";
import { CellContext } from "./contexts/CellType.context";
import useCell from "./hooks/useCell";
import useMatrix from "./hooks/useMatrix";
import Grid from "./components/Grid";
import { DrawMatrixContext } from "./contexts/DrawMatrix.context";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
`;

function App() {
  const cell = useCell();
  const matrix = useMatrix();

  return (
    <CellContext.Provider value={cell}>
      <DrawMatrixContext.Provider value={matrix}>
        <Container>
          <Content>
            <Grid rows={10} columns={15} />
            <CellTypeSelector />
          </Content>
        </Container>
      </DrawMatrixContext.Provider>
    </CellContext.Provider>
  );
}

export default App;
