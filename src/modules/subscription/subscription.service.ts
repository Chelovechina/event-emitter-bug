import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  EventEmitter2,
  EventEmitterReadinessWatcher,
} from '@nestjs/event-emitter';

@Injectable()
export class SubscriptionService implements OnApplicationBootstrap {
  constructor(
    private readonly _eventEmitter: EventEmitter2,
    private readonly _eventEmitterReadinessWatcher: EventEmitterReadinessWatcher,
  ) {}

  async onApplicationBootstrap() {
    try {
      console.log('subscription (try): wait');
      await this._eventEmitterReadinessWatcher.waitUntilReady();
      console.log('subscription (try): after wait');
    } catch (err) {
      console.error('subscription (error):', err);
    } finally {
      console.log('subscription (finally): working');
    }
  }
}
