import GradeAverageCalculator from "../src/GradeAverageCalculator";

test("Should display the calculated average of grades", () => {
  const average = GradeAverageCalculator.calculate([50,83,72,68]);
  expect(average).toBe(68.25);
})