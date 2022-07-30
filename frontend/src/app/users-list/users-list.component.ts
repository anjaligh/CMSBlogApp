import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import { UserModel } from '../services/UserModel';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  Users: UserModel[] = [];
  types = ['Admin', 'User'];
  constructor(private bdata: BackendDataService) { }
  editUserForm = {
    accountType: ''
  }
  editmode = false;

  ngOnInit(): void {
    this.bdata.getUsers().subscribe(res => {
      this.Users = JSON.parse(JSON.stringify(res))
      console.log(this.Users[0].accountType)
    })
  }
  changePrivilage(id: any) {
    var editedUser = {
      _id: id,
      accountType: this.editUserForm.accountType
    }
    this.bdata.changePrivilage(editedUser).subscribe(res => {
      alert(JSON.parse(JSON.stringify(res)))
    })
  }
  change(){
    this.editmode = true;
  }
}
