import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service.js';
import { ProductoController } from './producto.controller.js';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Producto} from './entities/producto.entity.js';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Producto
    ],"mariadb-connection")
  ],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
