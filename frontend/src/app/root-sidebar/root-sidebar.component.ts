import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root-sidebar',
  templateUrl: './root-sidebar.component.html',
  styleUrls: ['./root-sidebar.component.css']
})
export class RootSidebarComponent {
  show=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public auth:AuthService) {}
  userVerify(){
    var accountType= localStorage.getItem('accountType');
    if (accountType==="User"){
      return true;
    }
    else {
      return false
   }
 }
}
