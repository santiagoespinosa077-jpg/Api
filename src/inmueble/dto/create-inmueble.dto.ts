import {IsString,IsNotEmpty,MaxLength,IsOptional,IsEnum,IsDateString} from "class-validator";
import {Tipo, Operacion} from '../entities/inmueble.entity.js';


export class CreateInmuebleDto{
	@IsString() @IsNotEmpty() @MaxLength(255)
	titulo:string;

	@IsEnum(Tipo) @IsOptional()
	tipo:Tipo;

	@IsOptional() @IsEnum(Operacion)
	operacion:Operacion;

	@IsString() @IsNotEmpty() @MaxLength(255)
	precio:string;

	@IsString() @IsNotEmpty() @MaxLength(255)
	direccion:string;

	@IsString() @IsNotEmpty() @MaxLength(255)
	superficie:string;

	@IsString() @IsNotEmpty() @MaxLength(255)
	habitaciones:string;

	@IsString() @IsNotEmpty() @MaxLength(255)
	banos:string;

	@IsString() @IsOptional() @MaxLength(255)
	descripcion: string;

	@IsString() @IsOptional() @MaxLength(255)
	contacto: string;

	@IsString() @IsOptional()
	imagen1?:string;

	@IsString() @IsOptional()
	imagen2?:string;

	@IsString() @IsOptional()
	imagen3?:string;

	@IsString() @IsOptional()
	imagen4?:string;

}

