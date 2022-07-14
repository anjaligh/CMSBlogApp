import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  adminloginForm=this.fb.group({
    mailid:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    accountType:['Admin']
  })
  loginAdmin(){
    alert('logged In successfully')
  }
}
