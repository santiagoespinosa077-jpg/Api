import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { TareaService } from './tarea.service.js';
import { CreateTareaDto } from './dto/create-tarea.dto.js';
import { UpdateTareaDto } from './dto/update-tarea.dto.js';

@Controller('tarea')
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}

  @Post()
  create(@Body(new ValidationPipe) createTareaDto: CreateTareaDto) {
    return this.tareaService.create(createTareaDto);
  }

  @Get()
  findAll() {
    return this.tareaService.findAll();
  }

  @Get(':id_tarea')
  findOne(@Param('id_tarea') id_tarea: number) {
    return this.tareaService.findOne(id_tarea);
  }

  @Patch(':id_tarea')
  update(@Param('id_tarea') id_tarea: number, @Body(new ValidationPipe) updateTareaDto: UpdateTareaDto) {
    return this.tareaService.update(id_tarea, updateTareaDto);
  }

  @Delete(':id_tarea')
  remove(@Param('id_tarea') id_tarea: number) {
    return this.tareaService.remove(id_tarea);
  }
}
