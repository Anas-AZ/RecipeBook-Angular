import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

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

    if(this.isLoginMode){
      //...
    }else{
      //Sign Up mode
      this.authService.signup(email, password).subscribe(
      {
        next:(response) => {
        console.log(response);
      },
      error:(error) => {
        console.log(error);
      }
    }
    );
    }
    form.reset();
  }

}
