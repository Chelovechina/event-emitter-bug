import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AdModule } from 'src/modules/ad/ad.module';
import { ServiceSubscriptionModule } from 'src/modules/service-subscription.ts/service-subscription.module';
import { SubscriptionModule } from 'src/modules/subscription/subscription.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      delimiter: '.',
      newListener: true,
      maxListeners: 20,
    }),
    AdModule,
    SubscriptionModule,
    ServiceSubscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
