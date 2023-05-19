import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Header } from './header.interfaces';

@Injectable({
  providedIn: 'root'
})

export class HeadersService {

  private apiUrl = "http://127.0.0.1:8001/api";
  
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  getHeaders(): Observable<Header[]>{
    return this.http.get<Header[]>(this.apiUrl + "/headers");
  }
}
