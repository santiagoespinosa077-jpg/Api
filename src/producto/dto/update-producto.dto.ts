import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto.js';


export class UpdateProductoDto extends PartialType(CreateProductoDto) {}
