import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  active = 'active';
  isLoggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }    
  }

}
