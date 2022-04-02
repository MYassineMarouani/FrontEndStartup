import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-ajouterformatteur',
  templateUrl: './ajouterformatteur.component.html',
  styleUrls: ['./ajouterformatteur.component.css']
})
export class AjouterformatteurComponent implements OnInit {
  Formatteurnew: any = {};
  ajouterFormatteurnewform: FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{8}$";
  rolePattern = "^((\\+91-?)|0)?[1-3]{1}$";
  agePattern = "^((\\+91-?)|0)?[0-9]{2}$";
  file: any;

  constructor(private formbuilder: FormBuilder, private Formatteur: FormateurService, private router: Router) { }

  ngOnInit() {
  }
  select(e){
    this.file= e.target.files[0];
  }
  ajouterformatteur() {
    this.Formatteurnew.role=2
  
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



    if (confirm("Appuyez sur OK pour confirmer l'ajout de formateur ")) {
      this.Formatteur.register(fd).subscribe((data) => { console.log("here is the formatteurs", data) });
      this.router.navigate(['/admindashboard/touslesformatteurs']);
    }
  }

}
