import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Emploinew) {
    return this.http.post(this.endpoint.url + 'Emploi/add',Emploinew)
  }
  getmyemploi (id) {
    return this.http.get(this.endpoint.url+ 'Emploi/getmyemplois/'+id);
  }
  getmyemploiformatteur (id) {
    return this.http.get(this.endpoint.url+ 'Emploi/getfemplois/'+id);
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Emploi/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Emploi/delete/'+id);

  }
  update(id: any, Emploinew: any){

    return this.http.put(this.endpoint.url + 'Emploi/update/' + id , Emploinew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Emploi/getbyid/'+ id);
  }

}
