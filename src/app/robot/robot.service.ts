import {Injectable} from '@angular/core';
import {Robot} from './robot.model';
import {ROBOTS} from './mock-robots';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor() {
  }

  private robots: Robot[] = ROBOTS;

  getRobots(): Robot[] {
    return this.robots;
  }

  find(id: number) {
    let robot = this.robots.find(robot => robot.id === id);
    return robot;
    // return JSON.parse(JSON.stringify(robot));
  }
}
