import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[CookieService]
})
export class AdminComponent implements OnInit {
  title = 'User Details';
  cookieValue = 'UNKNOWN';
  constructor(private httpService: HttpClient,private cookieService:CookieService) { }
  arrUser: string [];
  ngOnInit() {
    this.httpService.get('./assets/Sample.JSON').subscribe(
      data => {
        this.arrUser = data['data'] ;	 
         sessionStorage.setItem("UID", JSON.stringify(data['data'][0]['ID']));
        sessionStorage.setItem("UName", JSON.stringify(data['data'][0]['Name'])); 


        this.cookieValue=data['cookies'];
        this.cookieService.set('cookieValue',this.cookieValue);
       // this.cookieValue = this.cookieService.get('cookieValue');

        /*this.cookieService.set( 'Test', 'xcvdgdsgsgbfgd' );
        this.cookieValue = this.cookieService.get('Test');
        this.cookieValue=data['cookies'];*/
        // FILL THE ARRAY WITH DATA.
      });

  
    }
}

      