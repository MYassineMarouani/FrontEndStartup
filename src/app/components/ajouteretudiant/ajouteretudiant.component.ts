import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouteretudiant',
  templateUrl: './ajouteretudiant.component.html',
  styleUrls: ['./ajouteretudiant.component.css']
})
export class AjouteretudiantComponent implements OnInit {
  Etudiantnew: any = {};
  ajouterEtudiantnewform: FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{8}$";
  rolePattern = "^((\\+91-?)|0)?[1-3]{1}$";
  agePattern = "^((\\+91-?)|0)?[0-9]{2}$";
  file: any;
  constructor(private formbuilder: FormBuilder, private Etudiant: EtudiantService, private router: Router) { }


  ngOnInit() {
  }
  select(e) {
    this.file = e.target.files[0];
  }

  ajouteretudiant() {
    this.Etudiantnew.role=3

    let fd = new FormData();
    fd.append('image', this.file);
    fd.append('name', this.Etudiantnew.name);
    fd.append('lastname', this.Etudiantnew.lastname);
    fd.append('age', this.Etudiantnew.age);
    fd.append('genre', this.Etudiantnew.genre);
    fd.append('specialites', this.Etudiantnew.specialites);
    fd.append('email', this.Etudiantnew.email);
    fd.append('password', this.Etudiantnew.password);
    fd.append('linkfacebook', this.Etudiantnew.linkfacebook);
    fd.append('linklinkedin', this.Etudiantnew.linklinkedin);
    fd.append('role', this.Etudiantnew.role);
    fd.append('tel', this.Etudiantnew.tel);



    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de ajouter letudiant ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Ajouter!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Etudiant.register(fd).subscribe(
          (data) => { console.log("here is the student", data) },
          err=>{
            console.log(err);
            swalWithBootstrapButtons.fire(
              'Email exist!',
              'utiliser un autre email.',
              'warning'
            )
          }
          
          );
        // this.router.navigate(['/admindashboard/touslesetudiants']);
        swalWithBootstrapButtons.fire(
          'Ajouté!',
          'letudiant a été ajouté avec success.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'lajout a été annullé',
          'error'
        )
      }
    })
  }

}
