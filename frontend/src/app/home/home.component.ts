import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angularTests';
  list = ['Angular Typewriter Effect', 'Hello World...']
  constructor() { }

  ngOnInit(): void {
  }

}
