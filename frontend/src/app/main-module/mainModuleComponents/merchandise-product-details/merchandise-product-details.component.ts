import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagementService } from 'src/app/Shared/Services/data-management.service';

@Component({
  selector: 'app-merchandise-product-details',
  templateUrl: './merchandise-product-details.component.html',
  styleUrls: ['./merchandise-product-details.component.css'],
})
export class MerchandiseProductDetailsComponent {
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
      });
  }
}
