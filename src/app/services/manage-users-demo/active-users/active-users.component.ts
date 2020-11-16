import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  users: string[];
  switchedToActiveCount: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers
    this.switchedToActiveCount = this.counterService.getActiveCount();
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  getCount() {
    return this.counterService.switchedToActiveCount;
  }

}
