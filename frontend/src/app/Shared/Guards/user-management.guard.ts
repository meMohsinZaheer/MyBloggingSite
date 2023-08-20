import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagementService } from '../Services/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementGuard implements CanActivate {
  constructor(private userManagementService:UserManagementService, private Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.userManagementService.checkIfUserLogin() || this.userManagementService.CheckUserPrivilege()!=='Admin'){
        this.Router.navigate(['/management/sign-in'])
        return false;
        
      }else{
        
        return true;
      }
    
  }
  
}
