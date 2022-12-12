import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  baseUrl = 'https://gorest.co.in/public/v2/users';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v2/users')
  }

}


