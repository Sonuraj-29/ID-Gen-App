import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from '../globalComponent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // storing login data
  loginData = {
    Email : '',
    Password : ''
  }

  constructor(
    private http : HttpClient,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  // login function
  loginUser(){
    this.http.post<any>(`${GlobalComponent.appUri}/login`, this.loginData).subscribe((data)=>{
      var logData = data
      // if login successful
      if(logData.token){
        localStorage.setItem('token', logData.token)
        localStorage.setItem('name', logData.name)
        this.router.navigateByUrl('dashboard')

      }
      // if login failed
      else{
        var message = logData.message
        alert(message)
      }
    })
  }

}
