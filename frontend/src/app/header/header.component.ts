import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logoImage="assets/logopc2.png"
containername:any;
  constructor(private bdata:BackendDataService, public auth:AuthService) { }

  ngOnInit(): void { 
    this.containername=localStorage.getItem('containername')
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('accountType');
    localStorage.removeItem('category');
    localStorage.removeItem('mailid');
    localStorage.removeItem('username');
  }
  
}
