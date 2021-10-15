import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'log-in-outline' }
  ];

  constructor() {
  }

  loggedCheck() {
    if (sessionStorage.getItem('user') != null && this.appPages.length < 3) {
      this.appPages.push({ title: 'Alta', url: '/alta', icon: 'add-circle-outline' });
      this.appPages[1].title = 'Cerrar Sesión';
      this.appPages[1].icon = 'log-out-outline';
      this.appPages[1].url = '/logout';
    } else {
      this.appPages.splice(2);
    }
  }
}
