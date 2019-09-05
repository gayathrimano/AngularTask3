import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  arrHome: string [];
  constructor(private http: HttpClient) { 
   }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/Data1.Json");
  }
}
