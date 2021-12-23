export abstract class ValueObject<T extends unknown> {
  protected value!: T;

  protected constructor(value: T) {
    this.setValue(value);
  }

  getValue(): T {
    return this.value;
  }

  equals(valueObject: ValueObject<T>): boolean {
    return this.value === valueObject.value;
  }

  protected abstract setValue(value: T): void;
}
