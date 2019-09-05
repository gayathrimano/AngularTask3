import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  
  userName;
  userId
  arrHome: string [];
  title="Home";
  constructor(private obj:DataService) { }

  ngOnInit() {

    this.obj.getJSON().subscribe(data => {
      sessionStorage.setItem("ID", JSON.stringify(data['data'][0]['ID']));
      sessionStorage.setItem("Name", JSON.stringify(data['data'][0]['Name'])); 
     this.arrHome = data[data]; console.log(data);
     this.userName=JSON.parse(sessionStorage.getItem('UName'));
     this.userId=JSON.parse(sessionStorage.getItem('UID'));
  });
  }
}
