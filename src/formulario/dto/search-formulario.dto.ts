import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
export class SearchFormularioDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo debe ser un correo válido' })
  correo: string;

  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  apellido: string;
}
