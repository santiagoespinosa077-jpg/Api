import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensorService } from './sensor.service.js';
import { CreateSensorDto } from './dto/create-sensor.dto.js';
import { UpdateSensorDto } from './dto/update-sensor.dto.js';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  create(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorService.create(createSensorDto);
  }

  @Get()
  findAll() {
    return this.sensorService.findAll();
  }

  @Get(':id_sensor')
  findOne(@Param('id_sensor') id_sensor: number) {
    return this.sensorService.findOne(id_sensor);
  }

  @Patch(':id_sensor')
  update(@Param('id_sensor') id_sensor: number, @Body() updateSensorDto: UpdateSensorDto) {
    return this.sensorService.update(id_sensor, updateSensorDto);
  }

  @Delete(':id_sensor')
  remove(@Param('id_sensor') id_sensor: number) {
    return this.sensorService.remove(id_sensor);
  }
}
