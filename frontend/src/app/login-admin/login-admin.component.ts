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
          this.router.navigate(['rootuser']);
          // if(res.accountType=="Rootuser")
          // {
          // this.router.navigate(['rootuser']);
          // alert("Admin");

          // localStorage.setItem('username',res.username)
          // }
          // else if(res.accountType=="User")
          // {
          // // this.router.navigate(['/seller/profile']);
          // alert("User");
          // }
          // else if(res.accountType=="Buyer")
          // {
          //   this.router.navigate(['/buyer/bprofile'])
          //   alert(res.message);
          // }
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
