import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  getuserData(){

    let token = localStorage.getItem('token');

    return JSON.parse(window.atob( token.split('.')[1] ))

  }
}
