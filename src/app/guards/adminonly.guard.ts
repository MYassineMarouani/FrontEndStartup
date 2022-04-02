import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Injectable({
  providedIn: 'root'
})
export class AdminonlyGuard implements CanActivate {
  userrole: any;
  constructor(private Admin:AdminService,private router:Router ,) {}
  canActivate():boolean {
    this.userrole=this.Admin.getUserData().subject.role;
    if (this.Admin.loggedin() && this.userrole==1) {
      return true 
    } else {
      this.router.navigate(['/unauthorized'])
      
      return false
    }
  }

  
}
