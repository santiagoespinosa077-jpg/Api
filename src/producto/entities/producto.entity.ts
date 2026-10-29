import {Entity, Column, PrimaryGeneratedColumn,Index} from "typeorm";

export enum EstadoProducto{
	bajo="Necesita stock",
	normal="Normal"
}

@Entity()
export class Producto{
	@PrimaryGeneratedColumn()
	id_producto: number;

	@Index({unique:true})
	@Column({ length: 50 })
	sku: string;

	@Column()
	nombre_producto: string;

	@Column()
	categoria: string;

	@Column()
	marca: string;

	@Column()
	precio: string;

	@Column()
	existencias: string;

	@Column()
	descripcion: string;

	@Column()
	provedor: string;

	@Column({
		type: 'varchar',
		length: 14,
		default: EstadoProducto.normal
	})
	estado: EstadoProducto

	@Column({ type: 'longtext' })
  	imagen: string;

}
