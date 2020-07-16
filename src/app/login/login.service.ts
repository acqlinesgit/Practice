import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Result {
  Result: boolean;
  Msg: string;
  Member: string;
}
export interface Verification {
  Account: string;
  Password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostUrl = 'http://192.168.1.101:8787/api/First/';
  checkUrl = this.hostUrl + 'checkLogin';
  constructor(private httpClient: HttpClient) { }

  checkLogin(body: Verification) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    return this.httpClient.post<Result>(this.checkUrl, body, options);
  }
}
