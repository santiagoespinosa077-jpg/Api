import { Module } from '@nestjs/common';
import { InmuebleService } from './inmueble.service.js';
import { InmuebleController } from './inmueble.controller.js';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Inmueble} from './entities/inmueble.entity.js';


@Module({
  imports:[TypeOrmModule.forFeature([
    Inmueble
  ],"mssql-connection")
],
  controllers: [InmuebleController],
  providers: [InmuebleService],
})
export class InmuebleModule {}
