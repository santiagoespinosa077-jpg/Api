import{IsString, MinLength, MaxLength, IsNotEmpty, IsOptional, IsEnum} from "class-validator"
import {EstadoProducto} from '../entities/producto.entity.js'

export class CreateProductoDto {
	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(5)
	sku: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(5)
	nombre_producto: string;


	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(5)
	categoria: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(5)
	marca: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(1)
	precio: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(1)
	existencias: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(10)
	descripcion: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(255)
  	@MinLength(1)
	provedor: string;

	@IsString()
	imagen: string;

	@IsEnum(EstadoProducto)
	@IsOptional()
	estado: EstadoProducto;


}
