import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from "typeorm";

export enum EstadoMan {
  pendiente = "Pendiente",
  completado = "Completado",
  en_proceso = "En proceso",
}

export enum Prioridad {
  alta = "Alta",
  baja = "Baja",
  normal = "Normal",
}

@Entity()
export class Mantenimiento {
  @PrimaryGeneratedColumn()
  id_in: number;

  @Column()
  solicitante: string;

  @Column()
  area: string;

  @Column()
  ubicacion: string;

  @Column()
  tipo_mantenimiento: string;


  @Column()
  equipo: string;

  @Column({ type: "nvarchar", length: "MAX" })
  descripcion: string;

  @Column({ type: "varchar", length: 20, default: Prioridad.normal })
  prioridad: Prioridad;

  @CreateDateColumn({ type: 'datetime2' })
  fecha: Date;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  tecnico: string;

  @Column({ type: "varchar", length: 20, default: EstadoMan.pendiente })
  estado: EstadoMan;

  @Column({ type: "nvarchar", length: "MAX", nullable: true })
  observaciones: string;

  @Column({ type: "nvarchar", length: "MAX", nullable: true })
  imagen1: string;

  @Column({ type: "nvarchar", length: "MAX", nullable: true })
  imagen2: string;

  @Column({ type: "nvarchar", length: "MAX", nullable: true })
  imagen3: string;

  @Column({ type: "nvarchar", length: "MAX", nullable: true })
  imagen4: string;
}