import { Controller, Get, Res, Param, Query, HttpCode,
  // Post,
  // Body,
  // Patch,
  // Delete,
} from '@nestjs/common';
// import { FormularioService } from '../../formulario.service';
// import { CreateFormularioDto } from '../../dto/create-formulario.dto';
// import { UpdateFormularioDto } from '../../dto/update-formulario.dto';
import { RespuestaApi } from 'src/shared/domain/model/respuesta-api';
import { ArgumentoInvalidoError } from 'src/shared/domain/value-object/argumento-invalido-error';
import { Response } from 'express';
import { SearchFormularioDto } from 'src/formulario/dto/search-formulario.dto';
import { IFormularioService } from 'src/formulario/domain/interfaces/iformulario.service';

@Controller(['api', 'all-use', 'apiWeb'])
export class FormularioController {
  constructor(private readonly formularioService: IFormularioService) {}

  @Get('formulario')
  async searchFormulario( @Query() params: SearchFormularioDto, @Res({ passthrough: true }) res: Response ): Promise<RespuestaApi> {
    try {
      const data = await this.formularioService.findFormulario(params);

      return new RespuestaApi( 'Listado de todos los formularios', data, null, 200 );
    } catch (error) {
      if (error instanceof ArgumentoInvalidoError) {
        res.status(400).send(new RespuestaApi(error.message, {}, error.errors, 400));
      } else {
        res.status(500).send( new RespuestaApi( `Error interno del servidor ${JSON.stringify(error.message)}`, {}, null, 500 ) );
      }
    }
  }

  // @Post()
  // create(@Body() createFormularioDto: CreateFormularioDto) {
  //   return this.formularioService.create(createFormularioDto);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateFormularioDto: UpdateFormularioDto,
  // ) {
  //   return this.formularioService.update(+id, updateFormularioDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string, @Res({ passthrough: true }) res: Response): Promise<RespuestaApi>{
  //   return this.formularioService.remove(+id);
  // }
}
