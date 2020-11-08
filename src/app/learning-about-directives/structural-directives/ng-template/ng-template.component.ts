import {Component, OnInit} from '@angular/core';
import {RobotService} from '../../robot/robot.service';
import {Robot} from '../../robot/robot.model';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
