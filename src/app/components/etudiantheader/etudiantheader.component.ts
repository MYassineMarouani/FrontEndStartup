import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiantheader',
  templateUrl: './etudiantheader.component.html',
  styleUrls: ['./etudiantheader.component.css']
})
export class EtudiantheaderComponent implements OnInit {
  etudiantdata: any;
  respone: any;

  constructor(private Etudiant:EtudiantService, private endpoint:EndpointService,) { }

  ngOnInit() {
    this.etudiantdata=this.Etudiant.getetudiantData().subject;
    console.log(this.etudiantdata)
    localStorage.setItem('idEtudiant',this.etudiantdata.id)
    this.Etudiant.getbyid(this.etudiantdata.id).subscribe(
      res => {
        this.respone = res
        this.etudiantdata = this.respone;
      }
    );
  }
  logoutetudiant() {
    this.Etudiant.logoutetudiant();
  }

}
