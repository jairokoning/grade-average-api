import CalculateSubjectsGradeAverage from "../src/CalculateSubjectsGradeAverage";

test('Should calculate the grade average of 3 subjects', async () => {
  const subjects = [
    {
      name: 'English',
      grades: [80,93,90,79],
    },
    {
      name: 'Math',
      grades: [78,82,70,75,98],
    },
    {
      name: 'History',
      grades: [81,50,100],
    },
  ]


  const calculateGradesAverage = new CalculateSubjectsGradeAverage();
  const subjectsGradesAverage = await calculateGradesAverage.execute(subjects);
  expect(subjectsGradesAverage).toEqual([
    { subject: 'English', average: 85.5 },
    { subject: 'Math', average: 80.6 },
    { subject: 'History', average: 77 },
  ])
})

test('Should display a exception if less than 3 subjects', async () => {  
  const subjects = [
    {
      name: 'English',
      grades: [80,93,90,79],
    },
    {
      name: 'Math',
      grades: [78,82,70,75,98],
    }
  ]
  const calculateGradesAverage = new CalculateSubjectsGradeAverage();
  await expect(() => calculateGradesAverage.execute(subjects)).rejects.toThrow(
    new Error("It is necessary to inform at least the grades of 3 subjects")
  );
})