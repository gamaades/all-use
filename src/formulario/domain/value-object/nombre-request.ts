import { NoRequerido } from 'src/shared/domain/value-object/no-requerido';

export class Nombre extends NoRequerido<string> {
  static esValido(value: string): boolean {
    try {
      new Nombre(value);
      return true;
    } catch (error) {
      return false;
    }
  }
}
