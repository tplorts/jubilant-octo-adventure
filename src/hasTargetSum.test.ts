import hasTargetSum from "./hasTargetSum";

describe("hasTargetSum", () => {
  it("should return true if there are two integers in the array whose sum is equal to the given value", () => {
    expect(hasTargetSum([1, 2, 3, 4, 5], 7)).toBe(true);
    expect(hasTargetSum([10, 20, 30, 40, 50], 60)).toBe(true);
    expect(hasTargetSum([-1, 0, 1], 0)).toBe(true);
  });

  it("should return false if there are no two integers in the array whose sum is equal to the given value", () => {
    expect(hasTargetSum([1, 2, 3, 4, 5], 10)).toBe(false);
    expect(hasTargetSum([10, 20, 30, 40, 50], 100)).toBe(false);
    expect(hasTargetSum([-1, 0, 1], 10)).toBe(false);
  });
});
