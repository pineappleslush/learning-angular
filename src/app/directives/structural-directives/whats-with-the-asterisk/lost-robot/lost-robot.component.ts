import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lost-robot',
  templateUrl: './lost-robot.component.html',
  styleUrls: ['./lost-robot.component.scss']
})
export class LostRobotComponent implements OnInit {

  @Input() robot;

  constructor() { }

  ngOnInit(): void {
  }

}
