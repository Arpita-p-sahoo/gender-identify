import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  data:any[]=[];
  constructor(private httpClient:HttpClient) { }

  fetchData(input:any): Observable<any> {
    return this.httpClient.get(`https://api.genderize.io?name=${input}`);
  }
}
