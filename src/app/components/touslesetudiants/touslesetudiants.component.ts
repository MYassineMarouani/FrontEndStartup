import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-touslesetudiants',
  templateUrl: './touslesetudiants.component.html',
  styleUrls: ['./touslesetudiants.component.css']
})
export class TouslesetudiantsComponent implements OnInit {
  p: number = 1;

  constructor(private Etudiant: EtudiantService, public endpoint: EndpointService, private router: Router) { }
  etudiants: any;
  etudiantFilter: any;
  ngOnInit() {
    this.router.navigate(['/admindashboard/touslesetudiants']);
    this.Etudiant.getall().subscribe(
      res => {
        this.etudiants = res;
        this.etudiantFilter = res;
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
      title: 'Vous etes sur de supprimer letudiant ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Etudiant.delete(id).subscribe(
          res => {
            this.ngOnInit();
          },
          err => {
            console.log(err);
    
          }
        );
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'letudiant a été supprimé avec success.',
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
    this.etudiants = this.etudiantFilter.filter(p => {
    return (
    p.name.toLowerCase().includes(value.toLowerCase()) ||
    p.lastname.toLowerCase().includes(value.toLowerCase()) ||
    p.email.toLowerCase().includes(value) ||
    p._id.toLowerCase().includes(value)
  
    )
    })
    }

}
