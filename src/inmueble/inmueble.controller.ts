import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InmuebleService } from './inmueble.service.js';
import { CreateInmuebleDto } from './dto/create-inmueble.dto.js';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto.js';

@Controller('inmueble')
export class InmuebleController {
  constructor(private readonly inmuebleService: InmuebleService) {}

  @Post()
  create(@Body() createInmuebleDto: CreateInmuebleDto) {
    return this.inmuebleService.create(createInmuebleDto);
  }

  @Get()
  findAll() {
    return this.inmuebleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inmuebleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInmuebleDto: UpdateInmuebleDto) {
    return this.inmuebleService.update(+id, updateInmuebleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inmuebleService.remove(+id);
  }
}
