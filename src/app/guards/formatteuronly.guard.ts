import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { FormateurService } from '../services/formateur.service';

@Injectable({
  providedIn: 'root'
})
export class FormatteuronlyGuard implements CanActivate  {
  
  constructor(private Formatteur:FormateurService,private router:Router ,) {}
  canActivate():boolean {
    if (this.Formatteur.loggedin()) {
      return true 
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }

  

}
