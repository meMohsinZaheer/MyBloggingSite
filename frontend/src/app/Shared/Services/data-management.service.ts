import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(private HttpClient:HttpClient) { }

  UploadData(Payload:any){
    return this.HttpClient.post('http://localhost:4587/productManagement/UploadData',Payload)
  }
}
