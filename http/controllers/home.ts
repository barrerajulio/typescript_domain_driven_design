import { injectable } from "inversify";
import { Request, Response } from "express";

import { Student } from "../../src/teacher/domain/student";
import { StudentId } from "../../src/teacher/domain/student-id";

@injectable()
export class HomeController {
  hello(_: Request, res: Response) {
    console.log(Student.create(StudentId.create(), "Elias"));
    return res.json({
      hello: "world",
    });
  }
}
