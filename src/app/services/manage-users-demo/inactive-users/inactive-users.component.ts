import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {

  users: string[];

  switchedToInactiveCount: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    this.switchedToInactiveCount = this.counterService.getInactiveCount();
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  getCount() {
    return this.counterService.switchedToInactiveCount
  }

}
