import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class TravailmaisonService {

  constructor(private endpoint: EndpointService, private http: HttpClient,) { }
  add(Travailmaisonnewnew) {
    return this.http.post(this.endpoint.url + 'Travailmaison/add', Travailmaisonnewnew)
  }
  getall() {
    return this.http.get(this.endpoint.url + 'Travailmaison/getall');
  }
  delete(id: any) {
    return this.http.delete(this.endpoint.url + 'Travailmaison/delete/' + id);

  }
  update(id: any, Travailmaisonnew: any) {

    return this.http.put(this.endpoint.url + 'Travailmaison/update/' + id, Travailmaisonnew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Travailmaison/getbyid/'+ id);
  }
  // get by id formatteur
  getbyidformatteur(idFormatteur: any) {
    return this.http.get(this.endpoint.url + 'Travailmaison/getbyidformatteur/' + idFormatteur);
  }
  // get by id etudiant
  getbyidetudiant(idEtudiant: any) {
    return this.http.get(this.endpoint.url + 'Travailmaison/getbyidetudiant/' + idEtudiant);
  }
}
