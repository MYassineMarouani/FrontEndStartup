import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent implements OnInit {
  userdata: any;
  idconnected: any;
  constructor(private Formatteur:FormateurService,private Admin: AdminService, private router: Router, private Etudiant: EtudiantService,) { }
  xdata = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }
  token: any;
  login() {
    this.Admin.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.userdata=this.Admin.getUserData().subject.role;
        this.idconnected=this.Admin.getUserData().subject.id;
        console.log(this.userdata)
        console.log(this.idconnected)
        if (this.userdata==2) {
          this.router.navigate(['/formatteurdashboard']);
        } else if (this.userdata==3) {
          this.router.navigate(['/etudiantdashboard']);
        } else {
          this.router.navigate(['/admindashboard']);
        }
      },
      err => {
        Swal.fire(err.error.text)
        console.log(err);

      }

    );
  
  

  }
  loginetudiant() {
    this.Etudiant.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.router.navigate(['/etudiantdashboard']);
      },
      err => {
        Swal.fire(err.error.text)
        console.log(err);

      }

    );

  }
  loginformatteur() {
    this.Formatteur.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.router.navigate(['/formatteurdashboard']);
      },
      err => {
        Swal.fire(err.error.text)
        console.log(err);

      }

    );

  }
}