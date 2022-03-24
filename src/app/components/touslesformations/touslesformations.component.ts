import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-touslesformations',
  templateUrl: './touslesformations.component.html',
  styleUrls: ['./touslesformations.component.css']
})
export class TouslesformationsComponent implements OnInit {
  respone: any;
  Formatteurnamefinal: any;
  private forid: string;
  p: number = 1;
  constructor(private Formatteurname:FormateurService,private Formation: FormationService, public endpoint : EndpointService,private router:Router) { }
  formation:any;
  formationfilter: any;
  selectedItem: any;
  ngOnInit() {
    this.router.navigate(['/admindashboard/touslesformations']);
    this.Formation.getall().subscribe(
      res=>{
        this.formation = res;
        this.formationfilter = res;
        console.log(this.formation);
        
      },
      err=>{
        console.log(err);
        
      }
    );
    console.log(this.formation)
    // this.forid = this.respone.formatteur
    // console.log(this.forid)
    // this.Formatteurname.getbyid(this.forid).subscribe(
    //   res=>{
    //     this.respone = res
    //     this.Formatteurnamefinal = this.respone;
    //   }
    // );

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
      title: 'Vous etes sur de supprimer la formation ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Formation.delete(id).subscribe(
          res => {
            this.ngOnInit();
          },
          err => {
            console.log(err);
    
          }
        );
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'la formation a été supprimé avec success.',
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
    this.formation = this.formationfilter.filter(p => {
    return (
    p.title.toLowerCase().includes(value.toLowerCase()) ||
    p._id.toLowerCase().includes(value.toLowerCase()) 
    // p.formateur.toLowerCase().includes(value) 
    // p.prix.toLowerCase().includes(value)
  
    )
    })
    }
}


