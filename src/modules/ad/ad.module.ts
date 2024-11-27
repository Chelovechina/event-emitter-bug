import { Module } from '@nestjs/common';
import { AdService } from 'src/modules/ad/ad.service';

@Module({
  controllers: [],
  imports: [],
  exports: [AdService],
  providers: [AdService],
})
export class AdModule {}
