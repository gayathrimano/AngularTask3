import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogdataService {
  arrLogin:String[];
  constructor(private http1:HttpClient) { }

 public getJSON1(): Observable<any> {
    return this.http1.get("./assets/Data1.Json");
  }


}
