import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { InmuebleService } from './inmueble.service.js';
import { CreateInmuebleDto } from './dto/create-inmueble.dto.js';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto.js';

@Controller('inmueble')
export class InmuebleController {
  constructor(private readonly inmuebleService: InmuebleService) {}

  @Post()
  create(@Body(new ValidationPipe) data: CreateInmuebleDto) {
    return this.inmuebleService.create(data);
  }

  @Get()
  findAll() {
    return this.inmuebleService.findAll();
  }

  @Get(':id_im')
  findOne(@Param('id_im') id_im: number) {
    return this.inmuebleService.findOne(id_im);
  }

  @Patch(':id_im')
  update(@Param('id_im') id_im: number, @Body() data: UpdateInmuebleDto) {
    return this.inmuebleService.update(id_im, data);
  }

  @Delete(':id')
  remove(@Param('id_im') id_im: number) {
    return this.inmuebleService.remove(id_im);
  }
}
