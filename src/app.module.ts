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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'mssql-connection',
      type: 'mssql',
      host: 'localhost',
      username: 'sa',
      password: 'C@chitas692007',
      database: 'dsm43',
      port: 1433,
      entities:[Tarea],
      synchronize: true,
      options:{
        trustServerCertificate: true
      }
    }),
    TypeOrmModule.forRoot({
      name: 'postgres-connection',
      type: 'postgres',
      host: 'localhost',
      password: 'C@chas692007',
      database: 'dsm43',
      port: 5432,
      entities:[Sensor],
      synchronize: true,
      autoLoadEntities: true
    }),
    TypeOrmModule.forRoot({
      name: 'mariadb-connection',
      type: 'mariadb',
      host: 'localhost',
      password: 'S@ntiago69',
      database: 'dsm43',
      port: 3306,
      entities:[User],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule,
    SensorModule,
    TareaModule
  ],
  controllers:[AppController],
  providers:[AppService],
})
export class AppModule {}
