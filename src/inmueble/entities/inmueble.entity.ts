import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

export enum Tipo{
	residencial="Residencial",
	comercial="Comercial",
	industriales="Industriales",
	rusticos="rusticos"
}

export enum Operacion{
	venta="Venta",
	renta="Renta"
}
@Entity()
export class Inmueble{
	@PrimaryGeneratedColumn()
	id_im: number;

	@Column()
	titulo: string;

	@Column({ type: "varchar", length: 20, default: Tipo.residencial })
	tipo: Tipo;

	@Column({ type: "varchar", length: 20, default: Operacion.venta })
	operacion: Operacion;

	@Column()
	precio: string;

	@Column()
	direccion: string;

	@Column()
	superficie:string;

	@Column()
	habitaciones:string;

	@Column()
	banos: string;

	@Column({ type: "nvarchar", length: "MAX" })
	descripcion: string;

	@Column()
	contacto:string;

	@Column({ type: "nvarchar", length: "MAX", nullable: true })
	imagen1:string;

	@Column({ type: "nvarchar", length: "MAX", nullable: true })
	imagen2:string;

	@Column({ type: "nvarchar", length: "MAX", nullable: true })
	imagen3:string;

	@Column({ type: "nvarchar", length: "MAX", nullable: true })
	imagen4:string;

}

