import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged In successfully!');
    }, error => {
      console.log(error);
      this.alertify.error('Failed to login');
    }
    );
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    const token = localStorage.removeItem('token');
    this.alertify.message('Logged Out!');
  }
}
