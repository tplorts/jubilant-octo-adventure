export default function hasTargetSum(values: number[], targetSum: number) {
  for (let i = 0; i < values.length; i++) {
    const a = values[i];
    for (let j = i + 1; j < values.length; j++) {
      const b = values[j];
      if (a + b === targetSum) {
        return true;
      }
    }
  }
  return false;
}
