import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  EventEmitter2,
  EventEmitterReadinessWatcher,
} from '@nestjs/event-emitter';

@Injectable()
export class AdService implements OnApplicationBootstrap {
  constructor(
    private readonly _eventEmitter: EventEmitter2,
    private readonly _eventEmitterReadinessWatcher: EventEmitterReadinessWatcher,
  ) {}

  async onApplicationBootstrap() {
    try {
      console.log('ad (try): wait');
      await this._eventEmitterReadinessWatcher.waitUntilReady();
      console.log('ad (try): after wait');
    } catch (err) {
      console.error('ad (error):', err);
    } finally {
      console.log('ad (finally): working');
    }
  }
}
