import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Injectable({
  providedIn: 'root'
})
export class AdminonlyGuard implements CanActivate {
  constructor(private Admin:AdminService,private router:Router ,) {}
  canActivate():boolean {
    if (this.Admin.loggedin()) {
      return true 
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }

  
}
