import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http3:HttpClient) { }

  public TestData(): Observable<any> {
    return this.http3.get("userAuthenticate");
  }



}
