import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendDataService } from '../services/backend-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private fb: FormBuilder, private bData: BackendDataService, private router: Router) { }

  ngOnInit(): void {
  }
  adminloginForm = this.fb.group({
    mailid: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    // accountType: ['']
  })
  loginAdmin() {
    console.log("login frontend");
    console.log(this.adminloginForm.value)
    this.bData.loginAdmin(this.adminloginForm.value).subscribe(
      res => {
        if (res.success) {
          localStorage.setItem('token', res.token)
          localStorage.setItem('accountType', res.accountType)
          localStorage.setItem('mailid', res.mailid)
          // console.log(res.token)
          localStorage.setItem('username', res.username)
          alert('login Successful');
          if(res.accountType=="User")
          {
            //  alert("User");
          this.router.navigate(['userprofile']);
         
          }
          else{
            this.router.navigate(['rootuser']);
          }
          
          
        }
        else {
          alert(res.message)
        }
      },
      err => {
        alert("Login Failed")
      }
    )
    // alert('logged In successfully')
  }
}
