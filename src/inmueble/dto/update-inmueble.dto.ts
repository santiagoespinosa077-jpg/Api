import { PartialType } from '@nestjs/mapped-types';
import { CreateInmuebleDto } from './create-inmueble.dto.js';

export class UpdateInmuebleDto extends PartialType(CreateInmuebleDto) {}
