export default class GradeAverageCalculator {
  static calculate(grades: number[]) {
    let sumOfGrades = grades.reduce((accumulator, grade) => {
      return accumulator + grade;
    }, 0);    
    return sumOfGrades / grades.length;
  }
}