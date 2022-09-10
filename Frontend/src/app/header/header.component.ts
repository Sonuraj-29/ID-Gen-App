import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true

  constructor(
    public auth : AuthGuard
  ) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
  }

}
