import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { FormateurService } from '../services/formateur.service';

@Injectable({
  providedIn: 'root'
})
export class FormatteuronlyGuard implements CanActivate  {
  userrole: any;
  
  constructor(private Admin:AdminService,private Formatteur:FormateurService,private router:Router ,) {}
  canActivate():boolean {
    this.userrole=this.Admin.getUserData().subject.role;
    if (this.Admin.loggedin() && this.userrole==2) {
      return true 
    } else {
      this.router.navigate(['/unauthorized'])
      return false
    }
  }

  

}
