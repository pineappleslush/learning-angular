import {Component, OnInit} from '@angular/core';
import {AccountsService} from './services/accounts.service';

@Component({
  selector: 'app-manage-accounts-demo',
  templateUrl: './manage-accounts-demo.component.html',
  styleUrls: ['./manage-accounts-demo.component.scss']
})
export class ManageAccountsDemoComponent implements OnInit {

  public accounts: { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
