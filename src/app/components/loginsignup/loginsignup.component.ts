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
  constructor(private Formatteur:FormateurService,private Admin: AdminService, private router: Router, private Etudiant: EtudiantService,) { }
  xdata = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }
  token: any;
  loginadmin() {
    this.Admin.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.router.navigate(['/admindashboard']);
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