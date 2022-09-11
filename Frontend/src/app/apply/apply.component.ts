import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../globalComponent';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {


  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  apply(){

    var form = document.getElementById('applyForm') as HTMLFormElement
    let formData = new FormData(form)
    this.http.post(`${GlobalComponent.appUri}/apply`, formData).subscribe()
  }

}
