import { IValidationHandler } from "../interfaces/validation-handler";

export abstract class Validator<T extends IValidationHandler> {
  protected validationHandler!: T;

  constructor(validationHandler: T) {
    this.validationHandler = validationHandler;
  }

  abstract validate(): void;
}
