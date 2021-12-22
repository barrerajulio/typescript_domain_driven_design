import { StudentId } from "./student-id";

export class Student {
  private id!: StudentId;
  private name!: string;

  private constructor(id: StudentId, name: string) {
    this.setId(id);
    this.setName(name);
  }

  static create(id: StudentId, name: string): Student {
    return new Student(id, name);
  }

  getId(): StudentId {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  private setId(id: StudentId): void {
    this.assertValidId(id);
    this.id = id;
  }

  private setName(name: string): void {
    // TODO: constraint validations
    this.name = name;
  }

  private assertValidId(id: StudentId): void {
    // TODO: validations for check is valid student id
  }
}
