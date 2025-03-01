export class CourseDetails {
  courseName: string;
  technology: string;
  fees: number;
  duration: string;

  constructor(courseName: string, technology: string, fees: number, duration: string) {
    this.courseName = courseName;
    this.technology = technology;
    this.fees = fees;
    this.duration = duration;
  }
}