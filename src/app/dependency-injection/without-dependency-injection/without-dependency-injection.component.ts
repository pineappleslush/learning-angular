import {Component} from '@angular/core';
import {ROBOTS} from '../../robot/mock-robots';

@Component({
  selector: 'app-no-dependency-injection',
  templateUrl: './without-dependency-injection.component.html',
  styleUrls: ['./without-dependency-injection.component.scss']
})
export class WithoutDependencyInjectionComponent {
  robots = ROBOTS;
}
