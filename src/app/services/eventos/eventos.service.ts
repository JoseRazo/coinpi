import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from './evento.interfaces' ;

@Injectable({
  providedIn: 'root'
})

export class EventosService {

  private apiUrl = "http://127.0.0.1:8001/api";

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
