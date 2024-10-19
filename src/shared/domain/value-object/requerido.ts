export type Primitives = string | number | boolean | Date;

export abstract class Requerido<T extends Primitives> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
    this.asegurarValorDefinido(value);
  }

  private asegurarValorDefinido(value: T): void {
    if (value === null || value === undefined || value === '' || Number.isNaN(value)) {
      throw new Error(`${this.constructor.name} el valor debe ser definido`);
    }
  }
}
