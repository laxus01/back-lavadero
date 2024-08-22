import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { TypeVehicle } from './type-vehicle.entity';
import { Attention } from './attentions.entity';
import { Parking } from './parkings.entity';

@Entity({ name: 'vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  @OneToMany(() => Attention, (attention) => attention.vehicleId)
  @OneToMany(() => Parking, (parking) => parking.vehicleId)
  id: number;

  @Column({ unique: true })
  plate: string;

  @Column()
  client: string;

  @Column()
  phone: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @ManyToOne(() => TypeVehicle, (typeVehicle) => typeVehicle.id)
  @JoinColumn({ name: 'typeVehicleId' })
  typeVehicleId: TypeVehicle;
}
