import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  loginForm=this.fb.group({
    mailid:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    accountType:['User']
  })
  loginUser(){
    alert('logged In successfully')
  }
}
