import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsEnum,
  IsDateString,
} from "class-validator";
import { EstadoMan, Prioridad } from "../entities/mantenimiento.entity.js";

export class CreateMantenimientoDto {
  @IsString() @IsNotEmpty() @MaxLength(255)
  solicitante: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  area: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  ubicacion: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  tipo_mantenimiento: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  equipo: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  descripcion: string;

  @IsEnum(Prioridad) @IsOptional()
  prioridad?: Prioridad;

  @IsString() @IsOptional() @MaxLength(255)
  tecnico?: string;

  @IsEnum(EstadoMan) @IsOptional()
  estado?: EstadoMan;

  @IsString() @IsOptional() @MaxLength(255)
  observaciones?: string;

  @IsString() @IsOptional()
  imagen1?: string;

  @IsString() @IsOptional()
  imagen2?: string;

  @IsString() @IsOptional()
  imagen3?: string;

  @IsString() @IsOptional()
  imagen4?: string;
}