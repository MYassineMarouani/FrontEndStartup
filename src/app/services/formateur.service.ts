import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient , private endpoint: EndpointService, private router:Router,) { }
  login(formatteur:any) {
    return this.http.post(this.endpoint.url + 'formatteur/login',formatteur)
  }
  register(Formatteurnew) {
    return this.http.post(this.endpoint.url + 'Formatteur/register',Formatteurnew)
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Formatteur/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Formatteur/delete/'+id);

  }
  update(id: any, Formatteurnew: any){

    return this.http.put(this.endpoint.url + 'Formatteur/update/' + id , Formatteurnew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Formatteur/getbyid/'+ id);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }

  getformateurData(){

    let token = localStorage.getItem('token');

    return JSON.parse(window.atob( token.split('.')[1] ))

  }
  logoutformatteur() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }


}
