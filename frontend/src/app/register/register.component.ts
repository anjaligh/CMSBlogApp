import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    mailid:['',[Validators.required, Validators.email]],
    username:['',[Validators.required, Validators.pattern('^[a-zA-Z ]$')]],
    accountType:['',[Validators.required]],
    password:['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    passwordCnfrm:['']
  })
  registerUser(){
    alert('registered successfully')
  }
}
