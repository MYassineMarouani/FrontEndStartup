import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormateurService } from 'src/app/services/formateur.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-touslesformatteurs',
  templateUrl: './touslesformatteurs.component.html',
  styleUrls: ['./touslesformatteurs.component.css']
})
export class TouslesformatteursComponent implements OnInit {
  p: number = 1;
  constructor(private Formateur: FormateurService, public endpoint: EndpointService, private router: Router) { }
  formateurs: any;
  formateursfilter: any;
  ngOnInit() {
    this.router.navigate(['/admindashboard/touslesformatteurs']);
    this.Formateur.getall().subscribe(
      res => {
        this.formateurs = res;
        this.formateursfilter = res;
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
      title: 'Vous etes sur de supprimer le formatteur ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Formateur.delete(id).subscribe(
          res => {
            this.ngOnInit();
          },
          err => {
            console.log(err);
    
          }
        );
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'le a été supprimé avec success.',
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
  filterItem(value) {
    this.formateurs = this.formateursfilter.filter(p => {
    return (
    p.name.toLowerCase().includes(value.toLowerCase()) ||
    p.lastname.toLowerCase().includes(value.toLowerCase()) ||
    p.email.toLowerCase().includes(value) ||
    p._id.toLowerCase().includes(value)
  
    )
    })
    }

}
