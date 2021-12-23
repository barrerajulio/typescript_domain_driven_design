import { injectable } from "inversify";
import { Request, Response } from "express";

import { Status } from "../../src/teacher/domain/status";
import { Student } from "../../src/teacher/domain/student";
import { StudentId } from "../../src/teacher/domain/student-id";

@injectable()
export class HomeController {
  hello(_: Request, res: Response) {
    const student1 = Student.create(
      StudentId.create(),
      Status.published(),
      "invalid"
    );
    const student2 = Student.create(
      StudentId.create(student1.getId().getValue()),
      Status.draft(),
      "Elias"
    );
    console.log(student1, student2, student1.equals(student2));
    console.log(student1.validate());
    return res.json({
      hello: "world",
    });
  }
}
