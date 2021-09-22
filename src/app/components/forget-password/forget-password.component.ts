import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit
{

  forgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void
  {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.forgetPasswordForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    if (this.forgetPasswordForm.invalid)
    {
      return;
    }

    let requestFields = {
      email: this.forgetPasswordForm.value.email
    }

    this.userService.forget(requestFields).subscribe(response => console.log(response));
  }
}
