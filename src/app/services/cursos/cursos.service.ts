import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from './cursos.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  private apiUrl = environment.apiUrl;

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers, 
  };  
  
  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiUrl + "/cursos");
  }
}