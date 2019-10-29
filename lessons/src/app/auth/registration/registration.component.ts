import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formReg;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.formReg = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.authService.registration(this.formReg.value).subscribe( (res) =>{
      localStorage.setItem('token', res.access_token);
    })
  }

}
