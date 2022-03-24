import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formatteursidebar',
  templateUrl: './formatteursidebar.component.html',
  styleUrls: ['./formatteursidebar.component.css']
})
export class FormatteursidebarComponent implements OnInit {
  respone: any;

  constructor(private Formatteur:FormateurService, private endpoint:EndpointService,) { }
  formatteurdata:any;

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

}
