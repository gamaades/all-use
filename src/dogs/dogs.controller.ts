import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Post()
  create() {
    return `Esta acción agrega un nuevo perro`;
  }

  @Get()
  findAll(): string {
    return `Esta acción retorna todos los perros!!!`;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `Esta acción retorna al perro #${params.id}`;
  }
}
