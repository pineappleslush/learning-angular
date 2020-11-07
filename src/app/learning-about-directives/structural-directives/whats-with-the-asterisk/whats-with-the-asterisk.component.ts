import {Component, OnInit} from '@angular/core';
import {Robot} from '../../robot/robot.model';

@Component({
  selector: 'app-whats-with-the-asterisk',
  templateUrl: './whats-with-the-asterisk.component.html',
  styleUrls: ['./whats-with-the-asterisk.component.scss']
})
export class WhatsWithTheAsteriskComponent implements OnInit {

  public robots: Robot[] = [
    {id: 1, name: 'Hank', power: 'Circuit Breaker', status: 'happy'},
    {id: 2, name: 'Pepper', power: 'Flame Thrower', status: 'over-heating'}
  ];

  public robot: Robot;

  constructor() {
  }

  ngOnInit(): void {
    this.robot = this.robots[0];
  }

  public trackById(index: number, robot: Robot): number {
    return robot.id;
  }

}
