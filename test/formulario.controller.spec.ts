import { Test, TestingModule } from '@nestjs/testing';
import { FormularioController } from '../src/formulario/infraestructure/controllers/formulario.controller';
import { FormularioService } from '../src/formulario/formulario.service';

describe('FormularioController', () => {
  let controller: FormularioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormularioController],
      providers: [FormularioService],
    }).compile();

    controller = module.get<FormularioController>(FormularioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
