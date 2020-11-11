import {Component, OnInit} from '@angular/core';
import {Robot} from '../../../robot/robot.model';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  public robot: Robot = {
    id: 1,
    name: 'Hank',
    power: 'Circuit Breaker',
    status: 'hungry'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
