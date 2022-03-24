import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifierformatteur',
  templateUrl: './modifierformatteur.component.html',
  styleUrls: ['./modifierformatteur.component.css']
})
export class ModifierformatteurComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{8}$";
  rolePattern = "^((\\+91-?)|0)?[1-3]{1}$";
  agePattern = "^((\\+91-?)|0)?[0-9]{2}$";
  private _id: string;
  modifierFormatteurinfoform: FormGroup
  Formatteurnew: any = {};
  file: any;

  constructor(private formbuilder: FormBuilder, private Formatteurinfo: FormateurService, private router: Router, private route: ActivatedRoute) { }
  respone: any;
  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Formatteurinfo.getbyid(this._id).subscribe(
      res => {
        this.respone = res
        this.Formatteurnew = this.respone;
      }
    );
  }
  select(e){
    this.file= e.target.files[0];
  }
  modifierformatteur() {
    let fd = new FormData();
    fd.append('image', this.file);
    fd.append('name' , this.Formatteurnew.name);
    fd.append('lastname' , this.Formatteurnew.lastname);
    fd.append('age' , this.Formatteurnew.age);
    fd.append('genre' , this.Formatteurnew.genre);
    fd.append('specialites' , this.Formatteurnew.specialites);
    fd.append('email' , this.Formatteurnew.email);
    fd.append('password' , this.Formatteurnew.password);
    fd.append('linkfacebook' , this.Formatteurnew.linkfacebook);
    fd.append('linklinkedin' , this.Formatteurnew.linklinkedin);
    fd.append('role' , this.Formatteurnew.role);
    fd.append('tel' , this.Formatteurnew.tel);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Vous etes sur de modifier le formatteur ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Modifier!',
      cancelButtonText: 'No, Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Formatteurinfo.update(this._id, fd).subscribe((data) => { console.log("here is the student", data) });
        this.router.navigate(['/admindashboard/touslesformatteurs']);
        swalWithBootstrapButtons.fire(
          'Modifié!',
          'le formatteur a été modifié avec success.',
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
