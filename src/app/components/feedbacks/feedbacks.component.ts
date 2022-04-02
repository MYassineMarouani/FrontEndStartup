import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FeedbacksService } from 'src/app/services/feedbacks.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  formation: any;
  Feedbacknew: any = {};
  Etudiantdetails1: any;
  id: any;
  Etudiantdetails: any;
  respone: any;
  items: any = [];
  Reponse: any;

  constructor(private Feedback:FeedbacksService,private Etudiant:EtudiantService,private Formation:FormationService,private router:Router,public endpoint: EndpointService) { }

  ngOnInit() {
    this.id = this.Etudiant.getetudiantData().subject.id;
    this.Etudiant.getbyid(this.id).subscribe(
      res=>{
        this.respone = res
        this.Etudiantdetails = this.respone;
      }
    );
    this.Formation.getall().subscribe(
      res => {
        this.formation = res;
      },
      err => {
        console.log(err);

      }
    );
  }
  ajouterfeedback(form: NgForm) {
    this.items = [ 
      {idUser:this.Etudiantdetails._id , description:this.Feedbacknew.description  , idFormation:this.Feedbacknew.idFormation}
    ];
    console.log(this.items[0])
 

    this.Feedback.add(this.items[0]).subscribe((data) => { console.log("here is the feedback", data) });
    form.resetForm();
  }

}
