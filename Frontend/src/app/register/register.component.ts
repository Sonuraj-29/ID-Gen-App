import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalComponent } from '../globalComponent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  // storing signup data
  registerData = {
    Name : '',
    Email : '',
    Password : ''
  }

  constructor(
    private http : HttpClient,
    private router : Router){}

  ngOnInit(): void {
  }

// signup function

  registerUser(){
    this.http.post(`${GlobalComponent.appUri}/register`, this.registerData).subscribe((data:any)=>{

      var register = data

      if(register.registered == true){
        alert('Registered successfully')
        this.router.navigateByUrl('login')
      }
      else{
        alert('Account already exists')
      }
    })
  }
}
