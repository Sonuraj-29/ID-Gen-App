import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../globalComponent';
import { applyModel } from './apply.model';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  applyData = new applyModel('', '', '', '', '', '', '', '')

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  apply(){
    this.http.post(`${GlobalComponent.appUri}/apply`, this.applyData).subscribe()
  }

}
