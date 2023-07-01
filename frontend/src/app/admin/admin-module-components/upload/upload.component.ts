import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  private formBuilder:FormBuilder
){this.buildForm()}

buildForm(){
  this.myuploadform= this.formBuilder.group({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  })
}

submitUploadForm(){}

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
}
