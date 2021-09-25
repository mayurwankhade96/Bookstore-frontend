import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit
{
  registerForm!: FormGroup;
  submitted = false;
  show: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router) { }

  ngOnInit(): void
  {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    if (this.registerForm.invalid)
    {
      return;
    }

    let requestFields = {
      fullName: this.registerForm.value.fullName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      mobileNumber: this.registerForm.value.mobileNumber
    }

    this.userService.signup(requestFields).subscribe((response: any) => 
    {
      console.log(response);
      this.route.navigate(['login']);
    });
  }
}
