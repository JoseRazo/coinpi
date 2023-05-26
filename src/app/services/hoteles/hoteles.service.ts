import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from './hotel.interfaces';

@Injectable({
  providedIn: 'root'
})

export class HotelesService {

  private apiUrl = "http://127.0.0.1:8001/api";

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  getHoteles(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.apiUrl + "/hoteles");
  }
}
