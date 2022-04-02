import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {
  userrole: any;

  constructor(private router:Router,private Admin:AdminService,) { }

  ngOnInit() {
    this.userrole=this.Admin.getUserData().subject.role;
    if (this.userrole==1) {
      setTimeout(() => {
        this.router.navigate(['/admindashboard']);
    }, 5000);
    } else if (this.userrole==2) {
      setTimeout(() => {
        this.router.navigate(['/formatteurdashboard']);
    }, 5000);
    } else if (this.userrole==3) {
      setTimeout(() => {
        this.router.navigate(['/etudiantdashboard']);
    }, 5000);
    }
   
  }

}
