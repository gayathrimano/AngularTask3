import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, } from '@angular/common/http';
import {TestService} from '../test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  model: any = {};
  dataResponse;
  constructor(private http:TestService) { }

  ngOnInit() {
  }
Login()
{
  sessionStorage.setItem("name", JSON.stringify(this.model.username).toUpperCase());
  sessionStorage.setItem("Id", JSON.stringify(this.model.Id).toUpperCase());
  //this.http.post(this.globals.baseAppUrl + '/' + 'userAuthenticate', { 'browserName': browserName }, opts).subscribe(
    //(val) => {
      this.http.TestData().subscribe(val => {
        this.dataResponse = JSON.parse(val['_body']);
        sessionStorage.setItem("mainPageUserRole", JSON.stringify(this.dataResponse['userRole'][0]['userrole']));
        sessionStorage.setItem("mainPageOrganizationList", JSON.stringify(this.dataResponse['orginfo'])); 
});
}
}