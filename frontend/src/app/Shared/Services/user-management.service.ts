import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  registerUser(payLoad:any){
    return this.HttpClient.post('http://localhost:8888/userManagement/userRegister',payLoad)
    
  }
}
