import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { TravailmaisonService } from 'src/app/services/travailmaison.service';

@Component({
  selector: 'app-depotetudiant',
  templateUrl: './depotetudiant.component.html',
  styleUrls: ['./depotetudiant.component.css']
})
export class DepotetudiantComponent implements OnInit {
  id: any;
  respone: any;
  travailetudiant: any;

  constructor(private travailmaison:TravailmaisonService,private Etudiant:EtudiantService,) { }

  ngOnInit() {
    this.id = this.Etudiant.getetudiantData().subject.id;
    this.travailmaison.getbyidetudiant(this.id).subscribe(
      res=>{
        this.respone = res
        this.travailetudiant = this.respone;
      }
    );
  }

}
