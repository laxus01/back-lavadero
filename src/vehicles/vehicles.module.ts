import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from 'src/entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeVehicle } from 'src/entities/type-vehicle.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle, TypeVehicle]),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService]
})
export class VehiclesModule {}
