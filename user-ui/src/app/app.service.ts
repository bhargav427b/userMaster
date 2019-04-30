import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(formdata): Observable<any>{
    return this.http.post<any>('http://localhost:8080/login', formdata, httpOptions);
  }

  registerUser(user): Observable<any>{
    return this.http.post<any>('http://localhost:8080/users', user, httpOptions);
  }

  updateUser(user): Observable<any>{
    return this.http.put<any>('http://localhost:8080/users', user, httpOptions);
  }

  getUser(username): Observable<any>{
    console.log(username);
    return this.http.get<any>('http://localhost:8080/users/' + username, httpOptions);
  }
}
