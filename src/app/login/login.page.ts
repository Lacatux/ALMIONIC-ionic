import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginService } from '../services/login.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {'user': null, 'pwd': null};
  response: any;

  constructor(private app: AppComponent, private loginService: LoginService) {
  }

  ngOnInit() {
    
  }

  submit() {
    console.log(this.usuario);
    this.response = this.loginService.postLogin(this.usuario);
    this.app.loggedCheck();
  }

}
