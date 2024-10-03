import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express'; // Importar Response desde express
import { CreateCatDto } from './dto/crear-cat.dto';
import { UpdateCatDto } from './dto/update-fish.dto';
import { ListAllEntities } from './entities/cat.entity';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    console.log(createCatDto);
    res.status(HttpStatus.CREATED).send(createCatDto);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities, @Res() res: Response) {
    res.status(HttpStatus.OK).json([{ name: 'Tom', ega: 20, breed: 'Not' }]);
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
