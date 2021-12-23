import { Container, inject, injectable } from "inversify";
import { Request, Response } from "express";

import Symbols from "../../container/symbols";
import { RegisterStudentService } from "../../src/shared/application/register-student-service";
import { RegisterStudentRequest } from "../../src/shared/application/register-student-request";

@injectable()
export class StudentController {
  @inject(Symbols.ContainerRef)
  private containerRef!: Container;

  async register(req: Request, res: Response) {
    const { name } = req.body;
    const registerStudentService =
      this.containerRef.get<RegisterStudentService>(
        Symbols.RegisterStudentService
      );
    const student = registerStudentService.execute(
      RegisterStudentRequest.fromLiteral({ name })
    );
    return res.json({
      id: student.id.toString(),
      name: student.name,
    });
  }
}
