import { Pipe, PipeTransform } from '@angular/core';
import { FormateurService } from '../services/formateur.service';

@Pipe({
  name: 'groupe'
})
export class GroupePipe implements PipeTransform {
  respone: any;
  constructor(private Formatteurdetails1:FormateurService,) { }
  Formatteurdetails: any;
  transform(id:any){
    this.Formatteurdetails1.getbyid(id).subscribe(
      res=>{
        this.respone = res
        this.Formatteurdetails = this.respone;
      }
    );
    let name=this.Formatteurdetails
    console.log(name)

    return name;
    
  }
}
