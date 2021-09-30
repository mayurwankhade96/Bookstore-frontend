import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  isLogin: boolean = false;
  token: any;
  fullName: any;
  isProfile: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void
  {
    this.token = localStorage.getItem('token');

    if (this.token != null)
    {
      this.isLogin = true;
      this.fullName = localStorage.getItem('fullName');
    }
  }

  Login()
  {
    this.route.navigate(['login']);
  }

  clickProfile()
  {
    this.isProfile = !this.isProfile;
    this.fullName = localStorage.getItem('fullName');
  }

  signOutMethod()
  {
    this.isLogin = false;
    localStorage.clear();
    this.route.navigate(['home']);
  }
}
