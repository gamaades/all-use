import { LargoString } from './largo-string';

export class Uuid extends LargoString {
  constructor(value: string) {
    super(value, 36);
    if (value.length != 36)
      throw new Error(`Error el ${this.constructor.name} es invalido.`);
  }
}
