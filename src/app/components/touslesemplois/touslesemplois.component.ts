import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-touslesemplois',
  templateUrl: './touslesemplois.component.html',
  styleUrls: ['./touslesemplois.component.css']
})
export class TouslesemploisComponent implements OnInit {

  constructor(private Emploi:EmploiService, public endpoint: EndpointService, private router: Router) { }
  emplois: any;
  ngOnInit() {
    this.router.navigate(['/admindashboard/touslesemplois']);
    this.Emploi.getall().subscribe(
      res => {
        this.emplois = res;
        console.log(this.emplois)
      },
      err => {
        console.log(err);

      }
    );
  }
  delete(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de supprimer lemploi ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Emploi.delete(id).subscribe(
          res => {
            this.ngOnInit();
          },
          err => {
            console.log(err);
    
          }
        );
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'lemploi a été supprimé avec success.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'la Suppression a été annullé',
          'error'
        )
      }
    })
  }

}
