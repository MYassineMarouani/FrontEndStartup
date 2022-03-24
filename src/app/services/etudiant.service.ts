import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private router:Router,private http: HttpClient , private endpoint: EndpointService) { }
  login(etudiant:any) {
    return this.http.post(this.endpoint.url + 'Etudiant/login',etudiant)
  }
  register(Etudiantnew) {
    return this.http.post(this.endpoint.url + 'Etudiant/register',Etudiantnew)
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Etudiant/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Etudiant/delete/'+id);

  }
  update(id: any, Etudiantnew: any){

    return this.http.put(this.endpoint.url + 'Etudiant/update/' + id , Etudiantnew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Etudiant/getbyid/'+ id);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }
  getetudiantData(){

    let token = localStorage.getItem('token');

    return JSON.parse(window.atob( token.split('.')[1] ))

  }
  logoutetudiant() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
