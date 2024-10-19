import { Injectable } from '@nestjs/common';
import { ListaFormularioEntity } from 'src/formulario/domain/entities/lista-formulario.entity';
import { IFormularioRepository } from 'src/formulario/domain/interfaces/iformulario-repository';
import { IMySQLProvider } from 'src/shared/domain/interfaces/imysql.provider';

@Injectable()
export class FormularioRepository implements IFormularioRepository {
  constructor(private readonly mySql: IMySQLProvider) {}

  async listarFormularios(): Promise<ListaFormularioEntity[]> {
    try {
      const response = await this.mySql.ejecutarSP(
        `u731584133_apiWeb.SP_BuscarFormulario`,
        ['', '', '', ''],
      );
      const formulario = new Array<ListaFormularioEntity>();
      if (response && response.length > 0) {
        for (const registro of response) {
          const formularioEntity = new ListaFormularioEntity(
            registro.id,
            registro.correo,
            registro.nombre,
            registro.apellido,
            registro.idPais,
            registro.idRegion,
            registro.idCiudad,
            registro.idComuna,
            registro.direccion,
            registro.telefono,
            registro.nombreComuna,
            registro.nombreCiudad,
            registro.nombrePais,
          );
          formulario.push(formularioEntity);
        }
      }
      return formulario;
    } catch (error) {
      throw new Error(
        `FormularioRepository | listarFormularios | error=${error.message}`,
      );
    }
  }

  async listarFormularioPorParametros(
    params: any,
  ): Promise<ListaFormularioEntity[]> {
    try {
      const response = await this.mySql.ejecutarSP(
        `u731584133_apiWeb.SP_BuscarFormulario`,
        [params.id, params.correo, params.nombre, params.apellido],
      );
      const formulario = new Array<ListaFormularioEntity>();
      if (response && response.length > 0) {
        for (const registro of response) {
          const formularioEntity = new ListaFormularioEntity(
            registro.id,
            registro.correo,
            registro.nombre,
            registro.apellido,
            registro.idPais,
            registro.idRegion,
            registro.idCiudad,
            registro.idComuna,
            registro.direccion,
            registro.telefono,
            registro.nombreComuna,
            registro.nombreCiudad,
            registro.nombrePais,
          );
          formulario.push(formularioEntity);
        }
      }
      return formulario;
    } catch (error) {
      throw new Error(
        `FormularioRepository | listarFormularios | error=${error.message}`,
      );
    }
  }

  async agregarFormulario(params: any): Promise<any> {
    try {
      const response = await this.mySql.ejecutarSP(
        `u731584133_apiWeb.SP_InsertarFormulario`,
        [
          params.correo,
          params.nombre,
          params.apellido,
          params.idPais,
          params.idRegion,
          params.idCiudad,
          params.idComuna,
          params.direccion,
          params.telefono,
        ],
      );
      return response;
    } catch (error) {
      throw new Error(
        `FormularioRepository | agregarFormulario | error=${error.message}`,
      );
    }
  }
}
