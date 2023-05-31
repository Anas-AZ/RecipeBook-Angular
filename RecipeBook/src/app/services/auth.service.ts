import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';



export interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
   }

   signup(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRH3LlOHUwav4JwS10oiaWTlsq3UWOTl4',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError));
   }

   login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRH3LlOHUwav4JwS10oiaWTlsq3UWOTl4',{
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError));
   }

   private handleError(errorRes: HttpErrorResponse){

    let errorMessage = 'An unknown error ocurred!';

      if(!errorRes.error || !errorRes.error.error){
        return throwError(()=> new Error(errorMessage));
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Password is Invalid.';
          break;
      }

      return throwError(()=> new Error(errorMessage));
   }
}
