import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, of, throwError } from 'rxjs'; 
import { catchError, tap, map } from 'rxjs/operators'; 
import { Curso } from '../curso';
 
const httpOptions = { 
    headers: new HttpHeaders({'Content-Type': 'application/json'}) 
} 

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://192.168.176.144:8000/ws/almi/cursos';

  constructor(private httpClient: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.url);
  }


}
