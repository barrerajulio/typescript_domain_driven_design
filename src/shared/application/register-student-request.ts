import { StatusEnum } from "../../teacher/domain/status-enum";

export class RegisterStudentRequest {
  name: string;
  status: StatusEnum;

  private constructor(name: string, status: StatusEnum = StatusEnum.Draft) {
    this.name = name;
    this.status = status;
  }

  static fromLiteral({
    name,
    status,
  }: {
    name: string;
    status?: StatusEnum;
  }): RegisterStudentRequest {
    return new this(name, status);
  }
}
