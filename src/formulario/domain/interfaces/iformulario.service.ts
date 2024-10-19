import { SearchFormularioDto } from 'src/formulario/dto/search-formulario.dto';
import { ListaFormularioEntity } from '../entities/lista-formulario.entity';

export abstract class IFormularioService {
  abstract findAll(): Promise<ListaFormularioEntity[]>;
  abstract findFormulario(params: SearchFormularioDto): Promise<ListaFormularioEntity[]>;
}
