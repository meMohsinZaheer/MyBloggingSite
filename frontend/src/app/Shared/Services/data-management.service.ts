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

  



// fetchDataFromBackend(){
//   this.GetData().subscribe((res:any)=>{
//     res.Result.forEach((element:any) => {
//       if(element.softDeleteStatus!==1){
//         this.AllData.push(element)
//         console.log(this.AllData)
//       }
      
//     });
//   })
// }
fetchDataFromBackend() {
  const allData: any[] = [];
  this.GetData().subscribe((res: any) => {
    res.Result.forEach((element: any) => {
      if (element.softDeleteStatus !== 1) {
        this.AllData.push(element);
      }
    });
  });
}


filteredData(){
let filteredData=this.AllData.filter((obj:any)=>{
  return obj.category==="Sports" 
  //Without return filter function wouldn't work correctly
})
this.SportData=[]
this.SportData.push(...filteredData);
// console.log(this.SportData)
}
}
