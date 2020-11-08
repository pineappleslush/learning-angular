import { Component, OnInit } from '@angular/core';
import {Robot} from '../../robot/robot.model';
import {RobotService} from '../../robot/robot.service';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {

  public robots: Robot[];
  public robot: Robot;

  constructor(private robotService: RobotService) { }

  ngOnInit(): void {
    this.robots = this.robotService.getRobots();
  }

}
