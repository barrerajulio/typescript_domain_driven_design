import { injectable } from "inversify";

import { Classroom } from "./classroom";
import { Student } from "./student";

@injectable()
export class MoveStudentToClassroomService {
  execute(student: Student, _classroom: Classroom): Student {
    // TODO: Logic about of change the student's classroom, purpose is only to map the domain-service's concept
    return student;
  }
}
