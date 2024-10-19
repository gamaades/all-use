
export class ServicioError extends Error {
    readonly data: any;
    readonly mensaje: string;

    constructor(mensaje: string, data: any) {
        super(mensaje);
        Object.setPrototypeOf(this, ServicioError.prototype);
        this.data = data;
        this.mensaje = mensaje;
    }
}