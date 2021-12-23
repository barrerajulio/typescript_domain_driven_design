import { Student } from "./student";
import { StudentValidationHandler } from "./student-validation-handler";
import { Validator } from "../../shared/domain/validator";

export class StudentValidator extends Validator<StudentValidationHandler> {
  private student: Student;

  private constructor(
    student: Student,
    validationHandler: StudentValidationHandler
  ) {
    super(validationHandler);
    this.student = student;
  }

  static create(
    student: Student,
    validationHandler: StudentValidationHandler
  ): StudentValidator {
    return new this(student, validationHandler);
  }

  validate(): void {
    // TODO: only by example
    if (this.student.getName() === "invalid") {
      this.validationHandler.handleDefaultName();
    }
  }
}
