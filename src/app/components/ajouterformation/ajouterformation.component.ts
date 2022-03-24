import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouterformation',
  templateUrl: './ajouterformation.component.html',
  styleUrls: ['./ajouterformation.component.css']
})
export class AjouterformationComponent implements OnInit {
  formatteur: any;
  Formationnew: any = {};
  ajouterformationnewfrom: FormGroup;
  file: any;
  etudiant: any;

  constructor(private Etudiant: EtudiantService, private Formation: FormationService, private Formatteur: FormateurService, public endpoint: EndpointService, private router: Router) { }


  dropdownSettings = {};
  ngOnInit() {
    this.Formatteur.getall().subscribe(
      res => {
        this.formatteur = res;
      },
      err => {
        console.log(err);

      }
    );
    this.Etudiant.getall().subscribe(
      res => {
        this.etudiant = res;

        this.dropdownSettings = {
          singleSelection: false,
          idField: '_id',
          textField: 'name',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
      },
      err => {
        console.log(err);

      }
    );


  }



  // here multi select list

  select(e) {
    this.file = e.target.files[0];
  }
  ajouterformation() {
    console.log(this.Formationnew)

    let fd = new FormData();
    fd.append('image', this.file);
    fd.append('title', this.Formationnew.title);
    fd.append('description', this.Formationnew.description);
    fd.append('date', this.Formationnew.date);
    fd.append('nbr_heur', this.Formationnew.nbr_heur);
    fd.append('formatteur', this.Formationnew.formatteur);
    fd.append('groupe', JSON.stringify(this.Formationnew.groupe));
    fd.append('prix', this.Formationnew.prix);
    fd.append('technologies', this.Formationnew.technologies);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de ajouter la formation ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Ajouter!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Formation.add(fd).subscribe((data) => { console.log("here is the formation", data) });
        this.router.navigate(['/admindashboard/touslesformations']);

        swalWithBootstrapButtons.fire(
          'Ajouté!',
          'la formation a été ajouté avec success.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'lajout a été annullé',
          'error'
        )
      }
    })



  }

}
