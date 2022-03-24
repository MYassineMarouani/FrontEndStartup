import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Reponsenew) {
    return this.http.post(this.endpoint.url + 'Reponse/add',Reponsenew)
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Reponse/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Reponse/delete/'+id);

  }
  update(id: any, Reponsenew: any){

    return this.http.put(this.endpoint.url + 'Reponse/update/' + id , Reponsenew);

  }
  getbyid(idQuestion: any){
    return this.http.get(this.endpoint.url + 'Reponse/getbyid/'+ idQuestion);
  }
}
