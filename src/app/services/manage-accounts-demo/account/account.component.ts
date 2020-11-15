import {Component, Input} from '@angular/core';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus({id: this.id, newStatus: status});
  }
}
