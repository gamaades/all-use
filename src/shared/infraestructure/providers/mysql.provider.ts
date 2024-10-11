import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { IMySQLProvider } from 'src/shared/domain/interfaces/imysql.provider';
import { DataSource } from 'typeorm';

@Injectable()
export class MySQLProvider implements IMySQLProvider {
  constructor(
    @InjectDataSource('mysql') private readonly dataSource: DataSource, // Cambiado a 'mysql'
  ) {}

  async ejecutarSP(procedimiento: string, parametros: any[]): Promise<any> {
    try {
      let parametros_string = '';

      parametros.forEach(
        (parametro) =>
          (parametros_string += parametro ? `'${parametro}',` : `${null},`),
      );

      if (parametros.length) parametros_string = parametros_string.slice(0, -1);

      // MySQL también usa el mismo formato de llamada de procedimientos almacenados
      let query = `CALL ${procedimiento}(${parametros_string})`;

      return await this.dataSource.query(query);
    } catch (err: any) {
      throw new Error(
        `MySQLProvider | ejecutarSP | procedimiento="${procedimiento}" parametros="${parametros.join(', ')}" | error=${err.message}`,
      );
    }
  }

  async ejecutarConsulta(consulta: string, parametros: any[]): Promise<any> {
    try {
      return await this.dataSource.query(consulta, parametros);
    } catch (err: any) {
      throw new Error(
        `MySQLProvider | ejecutarConsulta | consulta="${consulta}" parametros="${parametros.join(', ')}" | error=${err.message}`,
      );
    }
  }

  async status() {
    try {
      const query = `SELECT 'OK'`;
      await this.dataSource.query(query);
    } catch (err: any) {
      throw new Error(`MySQLProvider | status | error=${err.message}`);
    }
  }
}
