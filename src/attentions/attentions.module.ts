import { Module } from '@nestjs/common';
import { AttentionsController } from './attentions.controller';
import { AttentionsService } from './attentions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/entities/vehicle.entity';
import { Washer } from 'src/entities/washers.entity';
import { Attention } from 'src/entities/attentions.entity';
import { SaleService } from 'src/entities/sales-services.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle, Washer, Attention, SaleService]),
  ],
  controllers: [AttentionsController],
  providers: [AttentionsService]
})
export class AttentionsModule {}
