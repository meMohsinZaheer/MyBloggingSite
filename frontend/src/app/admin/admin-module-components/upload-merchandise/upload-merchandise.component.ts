import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-merchandise',
  templateUrl: './upload-merchandise.component.html',
  styleUrls: ['./upload-merchandise.component.css'],
})
export class UploadMerchandiseComponent {
  myuploadform: FormGroup | any;
  imageArray: any = [];
  category: any = ['Shirts', 'Trousers', 'caps'];

  submitUploadForm() {}
}
