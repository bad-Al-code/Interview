
function findDiagonalOrder(mat: number[][]): number[] {
  const row = mat.length;
  const col = mat[0].length;

  const newMap = new Map<number, number[]>();

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const key = i + j;

      if (!newMap.has(key)) { newMap.set(key, []) }
      newMap.get(key)!.push(mat[i][j])
    }
  }

  const result = [];
  const keyLength = (row - 1) + (col - 1)

  for (let i = 0; i <= keyLength; i++) {
    const current = newMap.get(i)
    if (i % 2 === 0) { current.reverse() }

    result.push(...current)
  }

  return result
};
//test
