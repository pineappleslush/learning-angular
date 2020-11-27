import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RobotService} from '../../robot/robot.service';
import {Robot} from '../../robot/robot.model';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: ['./routing-demo.component.scss']
})
export class RoutingDemoComponent {
  robots: Robot[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private robotService: RobotService
  ) {
    this.robots = robotService.getRobots();
  }

  onGoToDirectives() {
    this.router.navigate(['/directives']);
  }

  viewRobotDetails(id: number) {
    this.router.navigate(['parameters-demo/' + id], { relativeTo: this.route });
  }
}
