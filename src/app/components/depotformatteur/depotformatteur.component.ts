import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import { TravailmaisonService } from 'src/app/services/travailmaison.service';

@Component({
  selector: 'app-depotformatteur',
  templateUrl: './depotformatteur.component.html',
  styleUrls: ['./depotformatteur.component.css']
})
export class DepotformatteurComponent implements OnInit {
  id: any;
  respone: any;
  travailpourformatteur: any;
  travailpourformatteurtofilter: any;

  Travailmaisonnew: any = {};
  depotinfo: any;
  formation: any;

  constructor(private Formation:FormationService,private Formatteur:FormateurService,private travailmaison:TravailmaisonService,) { }

  ngOnInit() {
    
    this.id = this.Formatteur.getformateurData().subject.id;
    this.Formation.getformationsbyidformatteur(this.id).subscribe(
      res => {
        this.formation = res;
        console.log(this.formation);
        
      },
      err => {
        console.log(err);

      }
    );
    this.travailmaison.getbyidformatteur(this.id).subscribe(
      res=>{
        this.respone = res
        this.travailpourformatteur = this.respone;
        this.travailpourformatteurtofilter = res
        console.log(res);
        
      }
    );
  }


  filterItem(value) {
    this.travailpourformatteur = this.travailpourformatteurtofilter.filter(p => {
     
      
      return (
       JSON.stringify(p.formation).includes(value) 
    
      )
    })
    }
  ajouterremarques(idtravail : any) {
    let fd = new FormData();
    fd.append('etat' , this.Travailmaisonnew.etat);
    fd.append('remarques' , this.Travailmaisonnew.remarques);
    this.travailmaison.update(idtravail, fd).subscribe((data) => { console.log("here is the travail", data) });


  }
  verifierdepot(iddepot : any) {
    this.travailmaison.getbyid(iddepot).subscribe(
      res=>{
        this.respone = res
        this.Travailmaisonnew = this.respone;
      }
    );
    console.log(this.depotinfo)

  }

}
