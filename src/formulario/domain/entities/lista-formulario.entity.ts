export class ListaFormularioEntity {
  id: string;
  correo: string;
  nombre: string;
  apellido: string;
  idPais: number;
  idRegion: number;
  idCiudad: number;
  idComuna: number;
  direccion: string;
  telefono: string;
  nombreComuna: string;
  nombreCiudad: string;
  nombrePais: string;

  constructor(
    id: string,
    correo: string,
    nombre: string,
    apellido: string,
    idPais: number,
    idRegion: number,
    idCiudad: number,
    idComuna: number,
    direccion: string,
    telefono: string,
    nombreComuna: string,
    nombreCiudad: string,
    nombrePais: string,
  ) {
    this.id = id;
    this.correo = correo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.idPais = idPais;
    this.idRegion = idRegion;
    this.idCiudad = idCiudad;
    this.idComuna = idComuna;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nombreComuna = nombreComuna;
    this.nombreCiudad = nombreCiudad;
    this.nombrePais = nombrePais;
  }

  // Puedes agregar métodos adicionales si es necesario
}
