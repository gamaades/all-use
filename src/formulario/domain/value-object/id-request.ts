import { NoRequerido } from 'src/shared/domain/value-object/no-requerido';
import * as uuid from 'uuid';

export class IdFormulario extends NoRequerido<string> {
  static esValido(value: string): boolean {
    try {
      new IdFormulario(value);
      if (value === undefined) return true;
      if (!uuid.validate(value)) return false;
      return true;
    } catch (error) {
      return false;
    }
  }
}
