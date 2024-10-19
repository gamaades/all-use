import { Injectable } from '@nestjs/common';
// import { CreateFormularioDto } from './dto/create-formulario.dto';
// import { UpdateFormularioDto } from './dto/update-formulario.dto';
// import { FormularioRepository } from './infraestructure/persistences/formulario-repository';
import { IFormularioRepository } from './domain/interfaces/iformulario-repository';
import { ListaFormularioEntity } from './domain/entities/lista-formulario.entity';
import { IFormularioService } from './domain/interfaces/iformulario.service';
import { SearchFormularioDto } from './dto/search-formulario.dto';
import { ListarFormulariosRequest } from './domain/model/listar-fomulario-request';

@Injectable()
export class FormularioService implements IFormularioService {
  constructor(private readonly repository: IFormularioRepository) {}

  async findAll(): Promise<ListaFormularioEntity[]> {
    const response = await this.repository.listarFormularios();
    return response;
  }

  async findFormulario(params: SearchFormularioDto): Promise<ListaFormularioEntity[]> {
    const request = ListarFormulariosRequest.crearRequest(params);
    const result = request.obtenerPrimitivas();

    const response = await this.repository.listarFormularioPorParametros(result);
    return response;
  }

  // create(createFormularioDto: CreateFormularioDto) {
  //   return 'This action adds a new formulario';
  // }

  // update(id: number, updateFormularioDto: UpdateFormularioDto) {
  //   return `This action updates a #${id} formulario`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} formulario`;
  // }
}
