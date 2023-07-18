import * as moment from 'moment';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManagementService } from 'src/app/Shared/Services/data-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
Url:String="http://localhost:4587/"
ProductForm:any | FormGroup;
AllDataArray :any=[]
ParticularData:any={}
FilteredDataArray:any=[]
imageDetails:any;
  // DatePipe: any;
constructor(public DataManagementService:DataManagementService,private _FormBuilder:FormBuilder
  ){
  // this.FilteredDataArray=[]
    this.updateProductFormModel()
}
showTechData(selectedOption?:any){

  // this.DataManagementService.GetData().subscribe((res:any)=>{
  //   res.Result.forEach((element:any) => {
  //     if(element.softDeleteStatus!==1){
  //       this.AllDataArray.push(element)
  //     }
  //     let filteredData=this.AllDataArray.filter((obj:any)=>{
  //       return obj.category==="Tech and Telecom"
  //       //Without return filter function wouldn't work correctly
  //     })
  // this.FilteredDataArray=[]
  //     this.FilteredDataArray.push(...filteredData);
  //     console.log(this.FilteredDataArray)
  //   });
  // })
  if(selectedOption==="Tech and Telecom"){
    this.DataManagementService.GetData().subscribe((res: any) => {
      this.AllDataArray = res.Result.filter((element: any) => element.softDeleteStatus !== 1);
  
      this.FilteredDataArray = this.AllDataArray.filter((obj: any) => obj.category === "Tech and Telecom");
  
      console.log(this.FilteredDataArray);
    });
  
  }
  if(selectedOption==="Business"){
    this.DataManagementService.GetData().subscribe((res: any) => {
      this.AllDataArray = res.Result.filter((element: any) => element.softDeleteStatus !== 1);
  
      this.FilteredDataArray = this.AllDataArray.filter((obj: any) => obj.category === "Business");
  
      console.log(this.FilteredDataArray);
    });
  
  }
 if(selectedOption==="Sports"){
    this.DataManagementService.GetData().subscribe((res: any) => {
      this.AllDataArray = res.Result.filter((element: any) => element.softDeleteStatus !== 1);
  
      this.FilteredDataArray = this.AllDataArray.filter((obj: any) => obj.category === "Sports");
  
      console.log(this.FilteredDataArray);
    });
  
  }
  if(selectedOption==="Education"){
    this.DataManagementService.GetData().subscribe((res: any) => {
      this.AllDataArray = res.Result.filter((element: any) => element.softDeleteStatus !== 1);
  
      this.FilteredDataArray = this.AllDataArray.filter((obj: any) => obj.category === "Education");
  
      console.log(this.FilteredDataArray);
    });
  
  }
  if(selectedOption==="Pakistan"){
    this.DataManagementService.GetData().subscribe((res: any) => {
      this.AllDataArray = res.Result.filter((element: any) => element.softDeleteStatus !== 1);
  
      this.FilteredDataArray = this.AllDataArray.filter((obj: any) => obj.category === "Social" || obj.category==="Career" || obj.category==="Videos");
  
      console.log(this.FilteredDataArray);
    });
  
  }
}
//Using moment libraray to format the date 
formatDate(date: string): string {
  const formattedDate = moment(date, 'YYYY-M-D').format('DD MMMM YYYY');
  return formattedDate;
}
updateProductFormModel(){
  this.ProductForm= this._FormBuilder.group({
    title:new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required])
  })
}
GetDataById(_id:string){
  this.DataManagementService.GetDataById(_id).subscribe((res:any)=>{
    this.ParticularData=res.Result;
    console.log(this.ParticularData)
    this.ProductForm= this._FormBuilder.group({
      title:new FormControl(this.ParticularData?.title,[Validators.required]),
      description:new FormControl(this.ParticularData?.description,[Validators.required]),
      category:new FormControl(this.ParticularData?.category,[Validators.required])
    })
  })
}
getImage(event:any){
this.imageDetails= event.target.files[0];
}
updateImage(productId:any , oldImageDetails:any){
  let Payload={id:productId,newImageDetails:this.imageDetails,oldImageDetails:oldImageDetails}
  Payload;
}
Update(){
  
}
}
