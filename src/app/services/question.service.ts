import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Questionnew) {
    return this.http.post(this.endpoint.url + 'Question/add',Questionnew)
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Question/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Question/delete/'+id);

  }
  update(id: any, Questionnew: any){

    return this.http.put(this.endpoint.url + 'Question/update/' + id , Questionnew);

  }
}
