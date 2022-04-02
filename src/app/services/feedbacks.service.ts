import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Feedbacknew) {
    return this.http.post(this.endpoint.url + 'Feedback/add',Feedbacknew)
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Feedback/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Feedback/delete/'+id);

  }
  update(id: any, Feedbacknew: any){

    return this.http.put(this.endpoint.url + 'Feedback/update/' + id , Feedbacknew);

  }
  getbyid(idFormation: any){
    return this.http.get(this.endpoint.url + 'Feedback/getbyid/'+ idFormation);
  }
}
