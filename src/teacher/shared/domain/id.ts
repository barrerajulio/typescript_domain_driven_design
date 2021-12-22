export class Id {
  protected id!: string;

  protected constructor(id?: string) {
    if (!id) {
      id = "initialize-with-a-valid-uuid";
    }
    this.setId(id);
  }

  static create(id?: string) {
    return new Id(id);
  }

  getId(): string {
    return this.id;
  }

  protected setId(id: string): void {
    this.id = id;
  }
}
