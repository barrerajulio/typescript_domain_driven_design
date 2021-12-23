import { InvalidException } from "../shared/domain/invalid-exception";
import { IValidationHandler } from "../shared/interfaces/validation-handler";

export class StudentValidationHandler implements IValidationHandler {
  static create() {
    return new this();
  }

  handleDefaultName(): void {
    throw new InvalidException();
  }
}
