import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  arrHome: string [];
  constructor(private http:HttpClient) { }


  getUserDetails()
  {
    this.http.get('./assets/Sample.JSON').subscribe(
      data => {
        this.arrHome = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrHome[1]);
      });
  }




}
