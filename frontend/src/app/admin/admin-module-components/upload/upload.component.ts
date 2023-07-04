import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManagementService } from 'src/app/Shared/Services/data-management.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @ViewChild('FileSelect') FileSelect:ElementRef | any;
myuploadform: FormGroup | any;
imageArray:any =[]

constructor(
  private formBuilder:FormBuilder,
  private dataManagementService:DataManagementService
){this.buildForm()}

buildForm(){
  this.myuploadform= this.formBuilder.group({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  })
}



getimages(event:any){

  let files=event.target.files;
  const filelength=files.length;

  if(filelength<=5){
    this.imageArray.push(...files);
  }
  else{
    this.imageArray=[]
    this.FileSelect.nativeElement.value=null;
  }
}

submitUploadForm(){
  let MultiPartFormData=new FormData();
  MultiPartFormData.append('title',this.myuploadform.get('title').value);
  MultiPartFormData.append('description',this.myuploadform.get('description').value);
 this.imageArray.forEach((ImagesData:any )=> {
  MultiPartFormData.append('images',ImagesData);
 });
 this.dataManagementService.UploadData(MultiPartFormData).subscribe
 ((Response:any)=>{
  this.myuploadform.reset();
  this.imageArray=[]
 })
}
}
