import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error:string = null;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

  let authObs: Observable<AuthResponseData>;


    if(this.isLoginMode){
      //Login Mode
      authObs = this.authService.login(email, password);
    }else{
      //Sign Up mode
      authObs = this.authService.signup(email, password);
    }

    //Subscribe to observable
    authObs.subscribe(
      {
        next:(response) => {
        console.log(response);
        this.isLoading = false;
      },
      error:(errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    }
    );

    form.reset();
  }

}
