import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  EventEmitter2,
  EventEmitterReadinessWatcher,
} from '@nestjs/event-emitter';

@Injectable()
export class ServiceSubscriptionService implements OnApplicationBootstrap {
  constructor(
    private readonly _eventEmitter: EventEmitter2,
    private readonly _eventEmitterReadinessWatcher: EventEmitterReadinessWatcher,
  ) {}

  async onApplicationBootstrap() {
    try {
      console.log('service (try): wait');
      await this._eventEmitterReadinessWatcher.waitUntilReady();
      console.log('service (try): after wait');
    } catch (err) {
      console.error('service (error):', err);
    } finally {
      console.log('service (finally): working');
    }
  }
}
