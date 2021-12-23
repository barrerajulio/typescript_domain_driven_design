import { ValueObject } from "./value-object";

export class Id extends ValueObject<string> {
  protected value!: string;

  protected constructor(id?: string) {
    if (!id) {
      id = "initialize-with-a-valid-uuid";
    }
    super(id);
    this.setValue(id);
  }

  static create(id?: string) {
    return new Id(id);
  }

  protected setValue(id: string): void {
    this.value = id;
  }
}
