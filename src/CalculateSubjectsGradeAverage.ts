import GradeAverageCalculator from "./GradeAverageCalculator";

export default class CalculateSubjectsGradeAverage {
  async execute(subjects: Subject[]) {
    if (subjects.length < 3) { 
      throw new Error("It is necessary to inform at least the grades of 3 subjects");      
    }
    const subjectsGradesAverage = subjects.map(subject => {
      const average = GradeAverageCalculator.calculate(subject.grades);      
      return { subject: subject.name, average };
    })    
    return subjectsGradesAverage;
  }
}

interface Subject {
  name: string;
  grades: number[];
}