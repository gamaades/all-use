import { NoRequerido } from 'src/shared/domain/value-object/no-requerido';

export class Apellido extends NoRequerido<string> {
  static esValido(value: string): boolean {
    try {
      new Apellido(value);
      return true;
    } catch (error) {
      return false;
    }
  }
}
