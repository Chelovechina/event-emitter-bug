import { Module } from '@nestjs/common';
import { AdModule } from 'src/modules/ad/ad.module';
import { SubscriptionService } from 'src/modules/subscription/subscription.service';

@Module({
  controllers: [],
  imports: [AdModule],
  exports: [SubscriptionService],
  providers: [SubscriptionService],
})
export class SubscriptionModule {}
