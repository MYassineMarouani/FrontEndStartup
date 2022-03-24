import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formatteurheader',
  templateUrl: './formatteurheader.component.html',
  styleUrls: ['./formatteurheader.component.css']
})
export class FormatteurheaderComponent implements OnInit {
  formatteurdata: any;
  respone: any;

  constructor(private Formatteur:FormateurService, private endpoint:EndpointService,) { }

  ngOnInit() {
    this.formatteurdata=this.Formatteur.getformateurData().subject;
    console.log(this.formatteurdata)
    localStorage.setItem('idformatteur',this.formatteurdata.id)
    this.Formatteur.getbyid(this.formatteurdata.id).subscribe(
      res => {
        this.respone = res
        this.formatteurdata = this.respone;
      }
    );
  }
  logoutformatteur() {
    this.Formatteur.logoutformatteur();
  }

}
