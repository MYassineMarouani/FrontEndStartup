import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifieremploi',
  templateUrl: './modifieremploi.component.html',
  styleUrls: ['./modifieremploi.component.css']
})
export class ModifieremploiComponent implements OnInit {
  formation: any;
  _id: any;
  Emploinew: any = {};
  respone: any;

  constructor(private Emploiinfo:EmploiService,private Formation:FormationService,private Emploi:EmploiService,private router:Router,private route:ActivatedRoute,) { }
  ngOnInit() {
    this.Formation.getall().subscribe(
      res => {
        this.formation = res;
      },
      err => {
        console.log(err);

      }
    );
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Emploiinfo.getbyid(this._id).subscribe(
      res => {
        this.respone = res
        this.Emploinew = this.respone;
      }
    );
  }
  modifieremploi() {
    let fd = new FormData();
    fd.append('title' , this.Emploinew.title);
    fd.append('description' , this.Emploinew.description);
    fd.append('date_heur' , this.Emploinew.date_heur);
    fd.append('idFormation' , this.Emploinew.idFormation);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de modifier lemploi ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Modifier!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Emploiinfo.update(this._id, this.Emploinew).subscribe((data) => { console.log("here is the emploi", data) });
        this.router.navigate(['/admindashboard/touslesemplois']);
        swalWithBootstrapButtons.fire(
          'Modifié!',
          'lemploi a été modifié avec success.',
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
