import { SearchFormularioDto } from 'src/formulario/dto/search-formulario.dto';
import { Apellido } from '../value-object/apellido-request';
import { Correo } from '../value-object/correo-request';
import { IdFormulario } from '../value-object/id-request';
import { Nombre } from '../value-object/nombre-request';
import { ArgumentoInvalidoError } from 'src/shared/domain/value-object/argumento-invalido-error';

export class ListarFormulariosRequest {
  constructor(
    public idFormulario: IdFormulario,
    public correo: Correo,
    public nombre: Nombre,
    public apellido: Apellido,
  ) {}

  public obtenerPrimitivas() {
    return {
      id: this.idFormulario.value,
      correo: this.correo.value,
      nombre: this.nombre.value,
      apellido: this.apellido.value,
    };
  }

  static esValido(params: SearchFormularioDto): boolean {
    const mensajes: string[] = [];

    if (!IdFormulario.esValido(params.id))
      mensajes.push(`id no válido: valor=${params.id}`);
    if (!Correo.esValido(params.correo))
      mensajes.push(`correo no válido: valor=${params.correo}`);
    if (!Nombre.esValido(params.nombre))
      mensajes.push(`nombre no válido: valor=${params.nombre}`);
    if (!Apellido.esValido(params.apellido))
      mensajes.push(`apellido no válido: valor=${params.apellido}`);

    if (mensajes.length)
      throw new ArgumentoInvalidoError('Error de validación', mensajes);

    return true;
  }

  static crearRequest(params: SearchFormularioDto): ListarFormulariosRequest {
    this.esValido(params);

    return new ListarFormulariosRequest(
      new IdFormulario(params.id),
      new Correo(params.correo),
      new Nombre(params.nombre),
      new Apellido(params.apellido),
    );
  }
}
