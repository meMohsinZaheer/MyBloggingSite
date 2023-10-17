import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/Shared/Services/notifier.service';
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
    private readonly Router: Router,
    private snackbar: MatSnackBar,
    private snackbarservice: NotifierService
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
        console.log(res);
        if (res.Data == 'true') {
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
        } else {
          console.log('Either Email or Password is incorrect');
          this.snackbar.open('Either Email or Password is incorrect', 'Close', {
            duration: 10000, // Duration in milliseconds
            panelClass: 'success-snackbar', //Custom Css class. we can customize snackbar style
            horizontalPosition: 'center', // Change to 'end' or 'center'
            verticalPosition: 'top',
          });
          this.Router.navigate(['/main']);
        }
      }
    );
  }
}
