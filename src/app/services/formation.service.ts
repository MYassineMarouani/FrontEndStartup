import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Formationnew) {
    return this.http.post(this.endpoint.url + 'Formation/add',Formationnew)
  }
  getformationsbyidformatteur (id) {
    return this.http.get(this.endpoint.url+'Formation/getformationsbyidformatteur/'+id);

  }
  getall(){
    return this.http.get(this.endpoint.url + 'Formation/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Formation/delete/'+id);

  }
  update(id: any, Formationnew: any){

    return this.http.put(this.endpoint.url + 'Formation/update/' + id , Formationnew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Formation/getbyid/'+ id);
  }
}
