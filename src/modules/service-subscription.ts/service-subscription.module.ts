import { Module } from '@nestjs/common';
import { AdModule } from 'src/modules/ad/ad.module';
import { ServiceSubscriptionService } from 'src/modules/service-subscription.ts/service-subscription.service';

@Module({
  controllers: [],
  imports: [AdModule],
  exports: [ServiceSubscriptionService],
  providers: [ServiceSubscriptionService],
})
export class ServiceSubscriptionModule {}
