import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient:HttpClient) { }

  fetchData(): Observable<any> {
    return this.httpClient.get('https://api.genderize.io?name=luc');
  }
}
