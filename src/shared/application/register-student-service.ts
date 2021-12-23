import { injectable } from "inversify";

import { RegisterStudentRequest } from "./register-student-request";
import { RegisterStudentResponse } from "./register-student-response";
import { Status } from "../../teacher/domain/status";
import { Student } from "../../teacher/domain/student";
import { StudentId } from "../../teacher/domain/student-id";

@injectable()
export class RegisterStudentService {
  execute(request: RegisterStudentRequest): RegisterStudentResponse {
    // @TODO: Eventually we'll to crate more business logic
    const student = Student.create(
      StudentId.create(),
      Status.fromStatusId(request.status),
      request.name
    );
    return RegisterStudentResponse.fromStudent(student);
  }
}
