import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.setMessage();
  }

  ngOnInit(): void {
  }

  login() {
    this.message = 'Attempting to log in...';

    this.authService.login().subscribe(() => {
      this.setMessage();

      if (this.authService.isLoggedIn) {
        this.router.navigate([this.authService.redirectUrl]);
      }
    })
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'You are logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

}
