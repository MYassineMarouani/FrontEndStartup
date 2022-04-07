import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouteremploi',
  templateUrl: './ajouteremploi.component.html',
  styleUrls: ['./ajouteremploi.component.css']
})
export class AjouteremploiComponent implements OnInit {
  formation: any;
  Emploinew: any = {};
  ajouteremploinewfrom: FormGroup;

  constructor(private Formation:FormationService,private Emploi:EmploiService,private router:Router,public endpoint: EndpointService) { }

  ngOnInit() {
    this.Formation.getall().subscribe(
      res => {
        this.formation = res;
      },
      err => {
        console.log(err);

      }
    );
  }
  ajouteremploi() {

    let fd = new FormData();
    console.log(this.Emploinew)
    fd.append('title', this.Emploinew.title);
    fd.append('description', this.Emploinew.description);
    fd.append('date_debut', this.Emploinew.date_debut);
    fd.append('date_fin', this.Emploinew.date_fin);
    fd.append('idFormation', this.Emploinew.idFormation);




    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de ajouter lemploi ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Ajouter!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Emploi.add(this.Emploinew).subscribe((data) => { console.log("here is the emploi", data) });
        this.router.navigate(['/admindashboard/touslesemplois']);
        
        swalWithBootstrapButtons.fire(
          'Ajouté!',
          'lemploi a été ajouté avec success.',
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
