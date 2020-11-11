import {Component, OnInit} from '@angular/core';
import {Robot} from '../../../robot/robot.model';
import {RobotService} from '../../../robot/robot.service';

@Component({
  selector: 'app-whats-with-the-asterisk',
  templateUrl: './whats-with-the-asterisk.component.html',
  styleUrls: ['./whats-with-the-asterisk.component.scss']
})
export class WhatsWithTheAsteriskComponent implements OnInit {

  public robots: Robot[];
  public robot: Robot;

  constructor(private robotService: RobotService) {
  }

  ngOnInit(): void {
    this.robots = this.robotService.getRobots();
    this.robot = this.robots[0];
  }

  public trackById(index: number, robot: Robot): number {
    return robot.id;
  }
}
