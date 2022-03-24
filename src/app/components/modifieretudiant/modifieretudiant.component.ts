import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifieretudiant',
  templateUrl: './modifieretudiant.component.html',
  styleUrls: ['./modifieretudiant.component.css']
})
export class ModifieretudiantComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{8}$";
  rolePattern = "^((\\+91-?)|0)?[1-3]{1}$";
  agePattern = "^((\\+91-?)|0)?[0-9]{2}$";
  private _id: string;
  modifierEtudiantinfoform: FormGroup;
  Etudiantnew: any = {};
  file: any;
  constructor(private formbuilder: FormBuilder, private Etudiantinfo: EtudiantService, private router: Router, private route: ActivatedRoute) { }
  respone: any;
  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Etudiantinfo.getbyid(this._id).subscribe(
      res => {
        this.respone = res
        this.Etudiantnew = this.respone;
      }
    );
    

  }
  select(e){
    this.file= e.target.files[0];
  }
  modifieretudiant() {
    let fd = new FormData();
    fd.append('image', this.file);
    fd.append('name' , this.Etudiantnew.name);
    fd.append('lastname' , this.Etudiantnew.lastname);
    fd.append('age' , this.Etudiantnew.age);
    fd.append('genre' , this.Etudiantnew.genre);
    fd.append('specialites' , this.Etudiantnew.specialites);
    fd.append('email' , this.Etudiantnew.email);
    fd.append('password' , this.Etudiantnew.password);
    fd.append('linkfacebook' , this.Etudiantnew.linkfacebook);
    fd.append('linklinkedin' , this.Etudiantnew.linklinkedin);
    fd.append('role' , this.Etudiantnew.role);
    fd.append('tel' , this.Etudiantnew.tel);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de modifier letudiant ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Modifier!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Etudiantinfo.update(this._id, fd).subscribe((data) => { console.log("here is the student", data) });
        this.router.navigate(['/admindashboard/touslesetudiants']);
        swalWithBootstrapButtons.fire(
          'Modifié!',
          'letudiant a été modifié avec success.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'la modification a été annullé',
          'error'
        )
      }
    })

  }

}
