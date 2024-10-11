export abstract class IMySQLProvider {
  abstract ejecutarSP(procedimiento: string, parametros: any[]): Promise<any>;
  abstract ejecutarConsulta(consulta: string, parametros: any[]): Promise<any>;
  abstract status(): Promise<any>;
}
