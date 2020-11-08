import { Injectable } from '@angular/core';
import {Robot} from './robot.model';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  private robots: Robot[] = [
    {id: 1, name: 'Hank', power: 'Circuit Breaker', status: 'happy'},
    {id: 2, name: 'Pepper', power: 'Flame Thrower', status: 'over-heating'}
  ];

  getRobots(): Robot[] {
    return this.robots;
  }
}
