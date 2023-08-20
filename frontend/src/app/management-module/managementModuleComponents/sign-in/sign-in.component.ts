import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/Shared/Services/user-management.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  public signInForm: FormGroup | any;

  constructor(
    private readonly UserManagementService: UserManagementService,
    private readonly FormBuilder: FormBuilder,
    private readonly Router: Router
  ) {
    this.signInFormModel();
  }
  signInFormModel() {
    this.signInForm = this.FormBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  userSignIn() {
    let userSignInValues = this.signInForm.value;
    this.UserManagementService.loginUser(userSignInValues).subscribe(
      (res: any) => {
        if (!this.UserManagementService.checkIfUserLogin()) {
          this.UserManagementService.setTokenLocalStorage(res.Token);
          localStorage.setItem('userPrivilege', res.UserPrivilege);
          if (res.UserPrivilege === 'Admin') {
            this.Router.navigate(['/admin']);
          } else {
            this.Router.navigate(['/main']);
          }
        } else {
          console.log(`${res.UserPrivilege} already logged in`);
        }
      }
    );
  }
}
