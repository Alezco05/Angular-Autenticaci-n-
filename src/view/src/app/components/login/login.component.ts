import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object = {
    email: '',
    password: ''
  };
  constructor(private autService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.autService.login(this.user).subscribe(resp => {
      localStorage.setItem('token', resp.token);
      this.router.navigate(['/private']);
    },
    err => console.log(err));
  }

}
