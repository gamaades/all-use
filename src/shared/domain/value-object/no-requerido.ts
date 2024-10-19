export type Primitives = string | number | boolean | Date;

export abstract class NoRequerido<T extends Primitives> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }
}
