import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import { UserModel } from '../services/UserModel';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
profile: UserModel[]=[];
  constructor(public bdata:BackendDataService) { }

  ngOnInit(): void {
var email= localStorage.getItem('mailid');
this.bdata.getUserProfile(email).subscribe(res=>{
  this.profile=JSON.parse(JSON.stringify(res))
  console.log()
})
  }

}
