import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Usuario } from '../usuario';

const httpOptions = { 
  headers: new HttpHeaders({'Content-Type': 'application/json'}) 
} 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://192.168.176.144:8000/ws/almi/login';

  constructor(private httpClient: HttpClient) { }

  postLogin(usuario) {
    this.httpClient.post<any>(this.url, { user: usuario.user, pwd: usuario.pwd }).subscribe(data => {
        localStorage.clear();
        localStorage.setItem("id", data.id);
        localStorage.setItem("user", data.user);
        localStorage.setItem("nombre", data.nombre);
        localStorage.setItem("apellido1", data.id);
        localStorage.setItem("apellido1", data.apellido1);
        localStorage.setItem("apellido2", data.apellido2);
        localStorage.setItem("tipo", data.tipo);
    })
  }
}
