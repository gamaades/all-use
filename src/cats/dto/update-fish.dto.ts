import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './crear-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {}
