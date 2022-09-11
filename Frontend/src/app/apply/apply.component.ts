import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from '../globalComponent';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {


  constructor(
    private http : HttpClient,
    private router : Router) { }

  ngOnInit(): void {
  }

  apply(){

    var form = document.getElementById('applyForm') as HTMLFormElement
    let formData = new FormData(form)
    formData.append('status','Submitted. Pending approval')
    this.http.post(`${GlobalComponent.appUri}/apply`, formData).subscribe((data:any)=>{
      alert(data.message)
      this.router.navigateByUrl('status')
    })
  }

}
