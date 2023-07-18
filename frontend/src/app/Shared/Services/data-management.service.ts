import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  public AllData:any=[]
  public SportData:any=[]
  public Url='http://localhost:4587/'
  constructor(private HttpClient:HttpClient) { }

  

  UploadData(Payload:any){
    return this.HttpClient.post('http://localhost:4587/productManagement/UploadData',Payload)
  }
  GetData(){
    return this.HttpClient.get('http://localhost:4587/productManagement/GetData')
  }
  GetDataById(_id:any){
    return this.HttpClient.get(`http://localhost:4587/productManagement/GetDataById/${_id}`)
  }

  






}
