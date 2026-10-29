import { PartialType } from '@nestjs/mapped-types';
import { CreateMantenimientoDto } from './create-mantenimiento.dto.js';

export class UpdateMantenimientoDto extends PartialType(CreateMantenimientoDto) {}
