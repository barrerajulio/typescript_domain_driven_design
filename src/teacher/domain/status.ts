import { StatusEnum } from "./status-enum";
import { StatusId } from "./status-id";
import { ValueObject } from "../shared/domain/value-object";

export class Status extends ValueObject<StatusId> {
  protected value!: StatusId;

  static published(): Status {
    return this.fromStatusId(StatusEnum.Published);
  }

  static fromStatusId(statusId: StatusEnum): Status {
    return new this(StatusId.create(statusId));
  }

  static draft(): Status {
    return this.fromStatusId(StatusEnum.Draft);
  }

  getValue(): StatusId {
    return this.value;
  }

  equals(status: Status): boolean {
    return this.getValue() === status.getValue();
  }

  protected setValue(value: StatusId): void {
    this.value = value;
  }
}
