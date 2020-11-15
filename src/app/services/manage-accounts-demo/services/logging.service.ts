import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logAccountAdded(accountName: string) {
    console.log('A new account has been added: ' + accountName);
  }

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

}
