import { Module } from '@nestjs/common';
import { MantenimientoService } from './mantenimiento.service.js';
import { MantenimientoController } from './mantenimiento.controller.js';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Mantenimiento} from './entities/mantenimiento.entity.js';


@Module({
  imports:[TypeOrmModule.forFeature([
      Mantenimiento
    ],"mssql-connection")
  ],
  controllers: [MantenimientoController],
  providers: [MantenimientoService],
})
export class MantenimientoModule {}
