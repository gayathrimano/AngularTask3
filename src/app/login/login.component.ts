import { Component, OnInit } from '@angular/core';
import {LogdataService} from '../logdata.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
arrLogin:String[];
dataResponse;
cookieData;
  constructor(private http2:LogdataService,private cookieService:CookieService) { }

  ngOnInit() {

    this.http2.getJSON1().subscribe(data => {
      /*console.log("data");
      console.log(res['data'][0]['ID']);
     /* this.dataResponse = JSON.parse(res['data']);
      if (this.dataResponse['ID'] != undefined && this.dataResponse['Name'] != undefined)
      {*/
      sessionStorage.setItem("UID", JSON.stringify(data['data'][0]['ID']));
      sessionStorage.setItem("UName", JSON.stringify(data['data'][0]['Name'])); 
      sessionStorage.setItem("UID", JSON.stringify(data['data'][1]['ID']));
      sessionStorage.setItem("UName", JSON.stringify(data['data'][1]['Name']));  
      this.cookieData=data['cookies'];
      this.cookieService.set('cookieValue',this.cookieData);

      this.arrLogin=data[data];
     /* sessionStorage.setItem("Name", JSON.stringify(this.dataResponse['ID'][0]['Name']));
      //this.arrLogin = data; console.log(data);
      }*/
     // this.arrLogin = data; console.log(data);
   }   
   );
   }
  }


