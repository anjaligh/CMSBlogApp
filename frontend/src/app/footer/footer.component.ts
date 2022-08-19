import { Component, OnInit } from '@angular/core';
import {faFacebookF,faTwitter,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebookF=faFacebookF;
  faTwitter=faTwitter;
  faInstagram=faInstagram;
  faLinkedinIn=faLinkedinIn;
  constructor() { }

  ngOnInit(): void {
  }

}
