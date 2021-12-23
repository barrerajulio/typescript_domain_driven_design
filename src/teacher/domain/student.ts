import { Status } from "./status";
import { StudentId } from "./student-id";
import { StudentValidationHandler } from "./student-validation-handler";
import { StudentValidator } from "./student-validator";

export class Student {
  private id!: StudentId;
  private name!: string;
  private status!: Status;

  private constructor(id: StudentId, status: Status, name: string) {
    this.setId(id);
    this.setName(name);
    this.setStatus(status);
  }

  static create(id: StudentId, status: Status, name: string): Student {
    return new Student(id, status, name);
  }

  getId(): StudentId {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getStatus(): Status {
    return this.status;
  }

  equals(student: Student): boolean {
    return this.getId().equals(student.getId());
  }

  validate(): void {
    const validator = StudentValidator.create(
      this,
      StudentValidationHandler.create()
    );
    validator.validate();
  }

  private setId(id: StudentId): void {
    this.assertValidId(id);
    this.id = id;
  }

  private setName(name: string): void {
    // TODO: constraint validations
    this.name = name;
  }

  private setStatus(status: Status): void {
    // TODO: validations for check is valid student id
    this.status = status;
  }

  private assertValidId(id: StudentId): void {
    // TODO: validations for check is valid student id
  }
}
