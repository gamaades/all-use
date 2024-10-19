export class RespuestaApi {
  public readonly codigo: number;
  public readonly mensaje: string;
  public readonly errores: string[];
  public readonly data: Record<string, any>;

  constructor(
    mensaje: string,
    data: Record<string, any>,
    errores: string[],
    codigo: number,
  ) {
    this.codigo = codigo,
    this.errores = errores,
    this.mensaje = mensaje,
    this.data = data;
  }
}
