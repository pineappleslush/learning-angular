import {Component, Input, OnInit} from '@angular/core';
import {Robot} from '../../robot/robot.model';

@Component({
  selector: 'app-hungry-robot',
  templateUrl: './hungry-robot.component.html',
  styleUrls: ['./hungry-robot.component.scss']
})
export class HungryRobotComponent implements OnInit {

  @Input() robot: Robot;

  constructor() { }

  ngOnInit(): void {
  }

}
