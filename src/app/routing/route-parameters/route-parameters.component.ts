import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Robot} from '../../robot/robot.model';
import {RobotService} from '../../robot/robot.service';

@Component({
  selector: 'app-route-parameters',
  templateUrl: './route-parameters.component.html',
  styleUrls: ['./route-parameters.component.scss']
})
export class RouteParametersComponent implements OnInit {

  robot: Robot;

  constructor(
    private activatedRoute: ActivatedRoute,
    private robotService: RobotService
  ) { }

  ngOnInit(): void {
    // '+' is shorthand for converting string to int
    this.robot = this.robotService.find(+this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.robot = this.robotService.find(+params['id']);
    })
  }

}
