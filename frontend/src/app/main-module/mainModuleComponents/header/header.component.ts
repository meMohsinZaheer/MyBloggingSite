import { Component } from '@angular/core';
import { UserManagementService } from 'src/app/Shared/Services/user-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
check:boolean=false;
constructor(private userManagementService:UserManagementService){
  if(!userManagementService.checkIfUserLogin()){
    this.check=false;
  }else{
    this.check=true;
  }
}

}
