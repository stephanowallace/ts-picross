export const create = (
  rows: number,
  columns: number,
  initialValue: CellType = "Void"
): Array<Array<CellType>> => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array<CellType>(columns).fill(initialValue);
  }
  return matrix;
};

export const countFilledCells = (line: Array<CellType>): Array<number> => {
  const result = [] as Array<number>;
  let fillCount = 0;

  line.forEach((cell, index) => {
    if (cell === "Fill") {
      fillCount = fillCount + 1;
      if (index + 1 === line.length) {
        result.push(fillCount);
      }
    } else {
      if (fillCount !== 0) {
        result.push(fillCount);
        fillCount = 0;
      }
    }
  });
  console.log("RESULT", result);
  return result;
};
