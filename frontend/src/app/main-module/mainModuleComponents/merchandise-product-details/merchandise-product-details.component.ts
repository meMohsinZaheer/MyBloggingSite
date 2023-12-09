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
  removeCart = false;
  idArray = [];

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

    let cartData = localStorage.getItem('localcart');
    if (productId && cartData) {
      let items = JSON.parse(cartData);

      items = items.filter((item: any) => {
        return productId === item._id;
        // console.log(item._id);
        // return 1;
      });
      console.log(items.length);

      // console.log(items.length);
      if (items.length > 0) {
        this.removeCart = true;
      } else {
        this.removeCart = false;
      }
    }
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
      this.removeCart = true;
    } else {
      console.warn('else');
    }
  }
  removeFromCart(id: any) {
    this.dataManagementService.removeFromCart(id);
    this.removeCart = false;
  }
}
