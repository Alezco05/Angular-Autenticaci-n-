import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: object = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.user).subscribe(resp => {
      localStorage.setItem('token', resp.token);
      this.router.navigate(['/private']);
    });
  }
}
