import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataManagementService {
  public AllData: any = [];
  public SportData: any = [];
  public Url = 'http://localhost:4587/';
  constructor(private HttpClient: HttpClient) {}

  UploadData(Payload: any) {
    return this.HttpClient.post(
      'http://localhost:4587/productManagement/UploadData',
      Payload
    );
  }
  GetData() {
    return this.HttpClient.get(
      'http://localhost:4587/productManagement/GetData'
    );
  }
  GetDataById(_id: any) {
    return this.HttpClient.get(
      `http://localhost:4587/productManagement/GetDataById/${_id}`
    );
  }
  UpdateById(Payload: any) {
    return this.HttpClient.post(
      'http://localhost:4587/productManagement/UpdateById',
      Payload
    );
  }
  updateImage(Payload: any) {
    return this.HttpClient.put(
      'http://localhost:4587/productManagement/UpdateImage',
      Payload
    );
  }
  softDeleteById(_id: any) {
    return this.HttpClient.delete(
      `http://localhost:4587/productManagement/DeleteById/${_id}`
    );
  }
  hardDelete(_id: any) {
    return this.HttpClient.delete(
      `http://localhost:4587/productManagement/HardDelete/${_id}`
    );
  }

  uploadMerchandisedata(Payload: any) {
    return this.HttpClient.post(
      'http://localhost:4587/productManagement/UploadMerchandiseData',
      Payload
    );
  }
  getMerchandiseData() {
    return this.HttpClient.get(
      'http://localhost:4587/productManagement/GetMerchandiseData'
    );
  }

  GetMerchandiseDataById(_id: any) {
    return this.HttpClient.get(
      `http://localhost:4587/productManagement/GetMerchandiseDataById/${_id}`
    );
  }
}
