import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from './evento.interfaces' ;
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EventosService {

  private apiUrl = environment.apiUrl;

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.apiUrl + "/eventos");
  }
}
