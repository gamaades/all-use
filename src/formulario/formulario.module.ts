import { Module } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { FormularioController } from './infraestructure/controllers/formulario.controller';
import { IFormularioRepository } from './domain/interfaces/iformulario-repository';
import { FormularioRepository } from './infraestructure/persistences/formulario-repository';
import { IMySQLProvider } from 'src/shared/domain/interfaces/imysql.provider';
import { MySQLProvider } from 'src/shared/infraestructure/providers/mysql.provider';
import { IFormularioService } from './domain/interfaces/iformulario.service';

@Module({
  controllers: [FormularioController],
  providers: [
    { provide: IFormularioService, useClass: FormularioService },
    { provide: IFormularioRepository, useClass: FormularioRepository },
    { provide: IMySQLProvider, useClass: MySQLProvider },
  ],
})
export class FormularioModule {}
