import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-detailsetudiant',
  templateUrl: './detailsetudiant.component.html',
  styleUrls: ['./detailsetudiant.component.css']
})
export class DetailsetudiantComponent implements OnInit {
  private _id: string;
  Etudiantdetails: any;

  constructor(public endpoint : EndpointService,private Etudiantdetails1: EtudiantService, private router: Router , private route: ActivatedRoute) { }
  respone: any;

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Etudiantdetails1.getbyid(this._id).subscribe(
      res=>{
        this.respone = res
        this.Etudiantdetails = this.respone;
      }
    );
  }
  delete(_id){
    if (confirm("Appuyez sur OK pour confirmer la suppression de l'etudiant ayant l'ID "+_id)) {
    this.Etudiantdetails1.delete(_id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }
  this.router.navigate(['/admindashboard/touslesetudiants']);
}


}
