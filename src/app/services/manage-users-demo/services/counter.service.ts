import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  switchedToInactiveCount = 0;
  switchedToActiveCount = 0;

  switchedToInactive() {
    this.switchedToInactiveCount++;
    console.log('Active -> Inactive: ' + this.switchedToInactiveCount);
  }

  switchedToActive() {
    this.switchedToActiveCount++;
    console.log('Inactive -> Active: ' + this.switchedToActiveCount);
  }

  getInactiveCount() {
    return this.switchedToInactiveCount
  }

  getActiveCount() {
    return this.switchedToActiveCount;
  }

}
