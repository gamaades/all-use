import { NoRequerido } from 'src/shared/domain/value-object/no-requerido';

export class Correo extends NoRequerido<string> {
  static esValido(value: string): boolean {
    try {
      new Correo(value);
      return true;
    } catch (error) {
      return false;
    }
  }
}
