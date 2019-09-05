import { Component } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginApplication';
  cookieValue = 'UNKNOWN';
 
  constructor( private cookieService: CookieService ) { }
 
  ngOnInit(): void {

    const allCookies: {} = this.cookieService.getAll();
    this.cookieService.set( 'Test', 'xcvdgdsgsgbfgd' );
    this.cookieValue = this.cookieService.get('Test');
  }



}
