import { StatusEnum } from "./status-enum";
import { ValueObject } from "../shared/domain/value-object";

export class StatusId extends ValueObject<number> {
  static create(statusId: StatusEnum): StatusId {
    return new this(statusId);
  }

  protected setValue(value: number): void {
    this.assertStatusValid(value);
    this.value = value;
  }

  private assertStatusValid(value: number) {
    // TODO: custom validation for status
  }
}
