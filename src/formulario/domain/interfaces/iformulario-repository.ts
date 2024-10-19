import { ListaFormularioEntity } from '../entities/lista-formulario.entity'

export abstract class IFormularioRepository {
  abstract listarFormularios(): Promise<ListaFormularioEntity[]>
  abstract listarFormularioPorParametros(parmas: any): Promise<ListaFormularioEntity[]>
}
