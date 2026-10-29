import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Module } from '@nestjs/common';
import { Sensor } from './sensor/entities/sensor.entity.js';
import { SensorModule } from './sensor/sensor.module.js';
import { Tarea } from './tarea/entities/tarea.entity.js';
import { TareaModule } from './tarea/tarea.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity.js';
import { UsersModule } from './users/users.module.js';
import { ProductoModule } from './producto/producto.module.js';
import {Producto} from './producto/entities/producto.entity.js'
import { MantenimientoModule } from './mantenimiento/mantenimiento.module.js';
import { InmuebleModule } from './inmueble/inmueble.module.js';
import {Mantenimiento} from './mantenimiento/entities/mantenimiento.entity.js';
import {Inmueble} from './inmueble/entities/inmueble.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'mssql-connection',
      type: 'mssql',
      host: 'localhost',
      username: 'sa',
      password: 'Passw0rd2024Fuerte',
      database: 'dsm43',
      port: 1433,
      entities:[Tarea, Mantenimiento,Inmueble],
      synchronize: true,
      options:{
        trustServerCertificate: true
      }
    }),
    TypeOrmModule.forRoot({
      name: 'postgres-connection',
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'C@chas692007',
      database: 'dsm43',
      port: 5432,
      entities:[User],
      synchronize: true,
      autoLoadEntities: true
    }),
    TypeOrmModule.forRoot({
      name: 'mariadb-connection',
      type: 'mariadb',
      host: 'localhost',
      username: 'root',
      password: 'S@ntiago69',
      database: 'dsm43',
      port: 3306,
      entities:[Sensor,Producto],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule,
    SensorModule,
    TareaModule,
    ProductoModule,
    MantenimientoModule,
    InmuebleModule
  ],
  controllers:[AppController],
  providers:[AppService],
})
export class AppModule {}
