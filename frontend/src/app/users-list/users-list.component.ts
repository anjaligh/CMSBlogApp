import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import { UserModel } from '../services/UserModel';
import { faPen} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  Users: UserModel[] = [];
  faPen=faPen;
  types = ['Admin', 'User'];
  constructor(private bdata: BackendDataService) { }
  editUserForm = {
    accountType: ''
  }
  editmode : boolean[]=[]; 
  ngOnInit(): void {
    
    this.bdata.getUsers().subscribe(res => {
      this.Users = JSON.parse(JSON.stringify(res))
      console.log(this.Users)
      const tablelength=this.Users.length;
      console.log(this.Users.length)
      for (var i = 0; i < tablelength; i++) {
        this.editmode.push(false);
      }
    })
    
    
  
  console.log("boolarray");
  console.log(this.editmode)
  }
  changePrivilage(id: any,i:any) {
    var editedUser = {
      _id: id,
      accountType: this.editUserForm.accountType
    }
    this.bdata.changePrivilage(editedUser).subscribe(res => {
      
      this.bdata.getUsers().subscribe(res => {
        this.Users = JSON.parse(JSON.stringify(res))})
        alert(JSON.parse(JSON.stringify(res)).message)
    })
    this.editmode[i] = false;
  }
  change(i:any){
    console.log(i)
    this.editmode[i] = true;
    console.log(this.editmode)
  }
}
