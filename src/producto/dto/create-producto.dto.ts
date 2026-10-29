import{IsString, MinLength, MaxLength, IsNotEmpty, IsOptional, IsEnum, IsNumberString} from "class-validator"
import {EstadoProducto} from '../entities/producto.entity.js'

export class CreateProductoDto {
  @IsString() @IsNotEmpty() @MaxLength(50)
  sku: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  nombre_producto: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  categoria: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  marca: string;

  @IsNumberString()
  precio: string;

  @IsNumberString({ no_symbols: true })
  existencias: string;

  @IsString() @MaxLength(255)
  descripcion: string;

  @IsString() @IsNotEmpty() @MaxLength(255)
  provedor: string;

  @IsString()
  imagen: string;

  @IsEnum(EstadoProducto) @IsOptional()
  estado: EstadoProducto;


}
