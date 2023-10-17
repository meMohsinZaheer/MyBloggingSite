import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagementService } from 'src/app/Shared/Services/data-management.service';

@Component({
  selector: 'app-merchandise-product-details',
  templateUrl: './merchandise-product-details.component.html',
  styleUrls: ['./merchandise-product-details.component.css'],
})
export class MerchandiseProductDetailsComponent {
  @ViewChild('ItemQuantity') ItemQuantity: ElementRef | any;
  itemQuantityDefault: number | any;
  productArray: object | any;
  Url = 'http://localhost:4587/';

  constructor(
    private dataManagementService: DataManagementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    this.dataManagementService
      .GetMerchandiseDataById(productId)
      .subscribe((datafromBackend: any) => {
        this.productArray = datafromBackend.Result;
        console.log(this.ItemQuantity.nativeElement.defaultValue);
      });
  }

  plus() {
    this.ItemQuantity.nativeElement.defaultValue++;
    this.itemQuantityDefault = this.ItemQuantity.nativeElement.defaultValue;
    // this.itemQuantityDefault++;
  }
  minus() {
    if (this.ItemQuantity.nativeElement.defaultValue > 0) {
      this.ItemQuantity.nativeElement.defaultValue--;
      this.itemQuantityDefault = this.ItemQuantity.nativeElement.defaultValue;

      // this.productArray.itemquantity = this.itemQuantityDefault;
      // console.log(this.productArray);
    }
  }

  // controlButton() {
  //   if (this.ItemQuantity.nativeElement.defaultValue != 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  AddtoCart() {
    if (!localStorage.getItem('access-token')) {
      this.productArray.itemquantity = this.itemQuantityDefault;
      this.dataManagementService.AddToLocalCart(this.productArray);
    } else {
      console.warn('else');
    }
  }
}
