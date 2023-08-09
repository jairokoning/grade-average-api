import axios from 'axios';

test('Should test API calculating the grade average of 3 subjects', async () => {
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

  const {data: subjectsGradesAverage} = await axios({
    url: 'http://localhost:3000/calculate-grade-average',
    method: 'post',
    data: subjects
  });

  expect(subjectsGradesAverage).toEqual([
    { subject: 'English', average: 85.5 },
    { subject: 'Math', average: 80.6 },
    { subject: 'History', average: 77 },
  ])
})