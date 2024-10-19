import { BadRequestException } from '@nestjs/common';
import { NoRequerido } from './no-requerido';

export class LargoStringNoRequerido extends NoRequerido<string> {
  constructor(value: string, largo: number) {
    super(value);
    if (typeof value != 'undefined' && value.length > largo)
      throw new BadRequestException(
        `${this.constructor.name} no puede superar los ${largo} caracteres.`,
      );
  }
}
