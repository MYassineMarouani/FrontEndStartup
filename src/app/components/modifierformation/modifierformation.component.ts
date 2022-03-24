import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifierformation',
  templateUrl: './modifierformation.component.html',
  styleUrls: ['./modifierformation.component.css']
})
export class ModifierformationComponent implements OnInit {
  private _id: string;
  modifierFormationinfoform: FormGroup;
  Formationnew: any = {};
  file: any;
  formatteur: any;
  etudiant: any;

  constructor(private Etudiant:EtudiantService,private Formateur:FormateurService,private formbuilder: FormBuilder, private Formationinfo: FormationService, private router: Router, private route: ActivatedRoute) { }
  respone: any;
  dropdownSettings = {};
  ngOnInit() {
    this.Formateur.getall().subscribe(
      res => {
        this.formatteur = res;
      },
      err => {
        console.log(err);

      }
    );
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Formationinfo.getbyid(this._id).subscribe(
      res => {
        this.respone = res
        this.Formationnew = this.respone;
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
  select(e){
    this.file= e.target.files[0];
  }
  modifierformation() {
    let fd = new FormData();
    fd.append('image', this.file);
    fd.append('title' , this.Formationnew.title);
    fd.append('description' , this.Formationnew.description);
    fd.append('date' , this.Formationnew.date);
    fd.append('nbr_heur' , this.Formationnew.nbr_heur);
    fd.append('formatteur' , this.Formationnew.formatteur);
    fd.append('groupe' , JSON.stringify(this.Formationnew.groupe));
    fd.append('prix' , this.Formationnew.prix);
    fd.append('technologies' , this.Formationnew.technologies);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de modifier la formation ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Modifier!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Formationinfo.update(this._id, fd).subscribe((data) => { console.log("here is the fformation", data) });
        this.router.navigate(['/admindashboard/touslesformations']);
        swalWithBootstrapButtons.fire(
          'Modifié!',
          'la formation a été modifié avec success.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'la modification a été annullé',
          'error'
        )
      }
    })

  }

}
