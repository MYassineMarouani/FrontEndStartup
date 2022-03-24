import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-detailsformatteur',
  templateUrl: './detailsformatteur.component.html',
  styleUrls: ['./detailsformatteur.component.css']
})
export class DetailsformatteurComponent implements OnInit {
  private _id: string;
  Formatteurdetails: any;

  constructor(public endpoint : EndpointService,private Formatteurdetails1: FormateurService, private router: Router , private route: ActivatedRoute) { }
  respone: any;
  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Formatteurdetails1.getbyid(this._id).subscribe(
      res=>{
        this.respone = res
        this.Formatteurdetails = this.respone;
      }
    );
  }
  delete(_id){
    if (confirm("Appuyez sur OK pour confirmer la suppression de formatteur ayant l'ID "+_id)) {
    this.Formatteurdetails1.delete(_id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }
  this.router.navigate(['/admindashboard/touslesformatteurs']);
}

}
