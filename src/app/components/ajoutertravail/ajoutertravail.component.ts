import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import { TravailmaisonService } from 'src/app/services/travailmaison.service';

@Component({
  selector: 'app-ajoutertravail',
  templateUrl: './ajoutertravail.component.html',
  styleUrls: ['./ajoutertravail.component.css']
})
export class AjoutertravailComponent implements OnInit {
  formatteur: any;
  id: any;
  items = [];
  Travailmaisonnew: any = {};
  file: any;
  formation: any;


  constructor(private Formation:FormationService,private Etudiant: EtudiantService, private Travailmaison: TravailmaisonService, private Formatteur: FormateurService,) { }

  ngOnInit() {
   

    const currentDate = new Date();
    this.id = this.Etudiant.getetudiantData().subject.id;
    this.Formatteur.getall().subscribe(
      res => {
        this.formatteur = res;
      },
      err => {
        console.log(err);

      }
    );
  }

  getMyFormation(id){
    console.log('ff');
    
    this.Formation.getformationsbyidformatteur(id).subscribe(
      res => {
        this.formation = res;
        console.log(this.formation);
        
      },
      err => {
        console.log(err);

      }
    );
  }


  select(e){
    this.file= e.target.files[0];
  }
  ajoutertravail(form: NgForm) {
    const currentDate = new Date();

    const cValue = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');

    let formData = new FormData();
    formData.append('idEtudiant' , this.id);
    formData.append('description' , this.Travailmaisonnew.description);
    formData.append('idFormatteur' , this.Travailmaisonnew.idFormatteur);
    formData.append('idFormation' , this.Travailmaisonnew.idFormation);
    formData.append('date' , currentDate.toString());
    formData.append('file' , this.file);


    this.Travailmaison.add(formData).subscribe((data) => { console.log("here is the travail", data) });
    
  }

}
