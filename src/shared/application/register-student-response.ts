import { Status } from "../../teacher/domain/status";
import { Student } from "../../teacher/domain/student";
import { StudentId } from "../../teacher/domain/student-id";

export class RegisterStudentResponse {
  id: StudentId;
  name: string;
  status: Status;

  private constructor(student: Student) {
    this.id = student.getId();
    this.name = student.getName();
    this.status = student.getStatus();
  }

  static fromStudent(student: Student) {
    return new this(student);
  }
}
