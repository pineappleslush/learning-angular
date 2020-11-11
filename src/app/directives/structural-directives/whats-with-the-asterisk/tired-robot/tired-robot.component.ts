import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tired-robot',
  templateUrl: './tired-robot.component.html',
  styleUrls: ['./tired-robot.component.scss']
})
export class TiredRobotComponent implements OnInit {

  @Input() robot;

  constructor() { }

  ngOnInit(): void {
  }

}
