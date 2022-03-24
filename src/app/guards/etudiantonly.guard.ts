import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantonlyGuard implements CanActivate  {
  
  constructor(private Etudiant:EtudiantService,private router:Router ,) {}
  canActivate():boolean {
    if (this.Etudiant.loggedin()) {
      return true 
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }

  

}
