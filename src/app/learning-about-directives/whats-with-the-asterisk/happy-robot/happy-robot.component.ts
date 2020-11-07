import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-happy-robot',
  templateUrl: './happy-robot.component.html',
  styleUrls: ['./happy-robot.component.scss']
})
export class HappyRobotComponent implements OnInit {

  @Input() robot;

  constructor() {
  }

  ngOnInit(): void {
  }

}
