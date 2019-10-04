import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  search = new FormControl('');

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  userForm1 = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    gender: ['', Validators.required]
  });

  get f() {
    return this.userForm.controls;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.search.value);
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
