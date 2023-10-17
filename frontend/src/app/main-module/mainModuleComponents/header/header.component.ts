import { Component } from '@angular/core';
import { DataManagementService } from 'src/app/Shared/Services/data-management.service';
import { UserManagementService } from 'src/app/Shared/Services/user-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  check: boolean = false;
  CartItems = 0;

  ngOnInit(): void {
    let Cartdata = localStorage.getItem('localcart');
    if (Cartdata) {
      this.CartItems = JSON.parse(Cartdata).length;
    }
    this.dataManagementService.cartData.subscribe((items) => {
      this.CartItems = items.length;
    });
  }
  constructor(
    private userManagementService: UserManagementService,
    private dataManagementService: DataManagementService
  ) {
    if (!userManagementService.checkIfUserLogin()) {
      this.check = false;
    } else {
      this.check = true;
    }
  }
}
