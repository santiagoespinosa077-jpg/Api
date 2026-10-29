import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { MantenimientoService } from './mantenimiento.service.js';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto.js';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto.js';

@Controller('mantenimiento')
export class MantenimientoController {
  constructor(private readonly mantenimientoService: MantenimientoService) {}

  @Post()
  create(@Body(new ValidationPipe) createMantenimientoDto: CreateMantenimientoDto) {
    return this.mantenimientoService.create(createMantenimientoDto);
  }

  @Get()
  findAll() {
    return this.mantenimientoService.findAll();
  }

  @Get(':id_in')
  findOne(@Param('id_in') id_in: number) {
    return this.mantenimientoService.findOne(id_in);
  }

  @Patch(':id_in')
  update(@Param('id_in') id_in: number, @Body(new ValidationPipe) updateMantenimientoDto: UpdateMantenimientoDto) {
    return this.mantenimientoService.update(id_in, updateMantenimientoDto);
  }

  @Delete(':id_in')
  remove(@Param('id_in') id_in: number) {
    return this.mantenimientoService.remove(id_in);
  }
}