import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FeedbacksService } from 'src/app/services/feedbacks.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-touslesfeedbacks',
  templateUrl: './touslesfeedbacks.component.html',
  styleUrls: ['./touslesfeedbacks.component.css']
})
export class TouslesfeedbacksComponent implements OnInit {
  p: number = 1;

  constructor(private Feedback: FeedbacksService, public endpoint: EndpointService, private router: Router) { }
  feedbacks: any;
  feedbacksFilter: any;
  ngOnInit() {
    this.Feedback.getall().subscribe(
      res => {
        this.feedbacks = res;
        console.log(this.feedbacks)
        this.feedbacksFilter = res;
      },
      err => {
        console.log(err);

      }
    );
  }
  filterItem(value) {
    this.feedbacks = this.feedbacksFilter.filter(p => {
      return (
        p.description.toLowerCase().includes(value.toLowerCase())


      )
    })
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
      title: 'Vous etes sur de supprimer ce feedback ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Feedback.delete(id).subscribe(
          res => {
            this.ngOnInit();
          },
          err => {
            console.log(err);
    
          }
        );
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'le feedback est supprimé avec success.',
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
