import { AggregateRoot } from "../../shared/domain/aggregate-root";
import { Id } from "../../shared/domain/id";
import { Student } from "./student";

export class Classroom extends AggregateRoot {
  id!: Id;
  students!: Student[];

  private constructor(id: Id, students: Student[]) {
    super();
    this.setId(id);
    this.setStudents(students);
  }

  static create(id: Id, students: Student[]): Classroom {
    return new this(id, students);
  }

  getId(): Id {
    return this.id;
  }

  getStudents(): Student[] {
    return this.students;
  }

  private setId(id: Id): void {
    this.id = id;
  }

  private setStudents(students: Student[]): void {
    this.students = students;
  }
}
