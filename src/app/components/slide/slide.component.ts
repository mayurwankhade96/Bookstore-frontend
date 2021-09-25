import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit
{
  signupVisibility: boolean = true;

  constructor(private route: Router) { }

  ngOnInit(): void
  {
  }

  onSignup()
  {
    this.signupVisibility = true;
    this.route.navigateByUrl('signup');
  }

  onLogin()
  {
    this.signupVisibility = false;
    this.route.navigateByUrl('login');
  }
}
