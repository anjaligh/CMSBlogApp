import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BackendDataService } from '../services/backend-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private backEnd: BackendDataService,
    private router: Router
  ) { }
  submitted = false;
  message='';
  
  isProcessing = false;
className=""
  ngOnInit(): void {
  }
  registerForm = this.fb.group({
    mailid: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{4,32}$')]],
    accountType: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    passwordCnfrm: ['']
  })
  registerUser() {
    console.log(this.message);
    this.isProcessing=true;
    this.submitted = true;
    const userData=this.registerForm.value
    this.backEnd.registerUser(userData).subscribe(res => {
      if(res.success){
        this.isProcessing=false;
        this.message='Account created'
        //alert(window.location.reload());
      
        console.log(this.message)
        this.className='alert alert-success'
        alert("Account Created ")
        // window.location.reload();
      }else 
      {
        this.isProcessing=false;
        
        this.message=res.message;
       //alert("Email id already exist or fields are empty")
        alert(this.message);
        this.className='alert alert-danger'
        //window.location.reload();
      }  
      
     // this.registerForm.value==clear();
      },
      err => {
        this.isProcessing=false;
        this.message="Server Error";
    //alert("server error")
        this.className='alert alert-info'
        //window.location.reload();
      })
  }
}
