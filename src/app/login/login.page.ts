import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private app: AppComponent) { 
    sessionStorage.setItem("user", "aa");
    this.app.loggedCheck();
  }

  ngOnInit() {
    
  }

}
