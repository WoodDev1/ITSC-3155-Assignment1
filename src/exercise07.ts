import * as fs from "fs";

export type GradeBook = {
  [studentName: string]: {
    [className: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const rawData: string = fs.readFileSync("data/gradebook.json", "utf-8");
  const gradebook: GradeBook = JSON.parse(rawData);

  const studentNames: string[] = Object.keys(gradebook);

  let total = 0;
  let count = 0;

  for (const name of studentNames) {
    const studentGrades = gradebook[name];
    const score = studentGrades[subject];

    if (score !== undefined) {
      total += score;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return total / count;
}