import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(private HttpClient:HttpClient) { }

  UploadData(Payload:any){
    return this.HttpClient.post('',Payload)
  }
}
