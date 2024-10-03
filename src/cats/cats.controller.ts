import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './dto/crear-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(Body);

    console.log(createCatDto);
    return 'This action adds a new cat';
  }

  @Get()
  // @Redirect('https://nestjs.com', 301) // Esto me redireccionara a la página que ingresemos como parametro.
  findAll(): string {
    return `Esta acción retorna todos los gatos!!!`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
