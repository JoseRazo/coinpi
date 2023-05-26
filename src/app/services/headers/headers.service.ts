import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Header } from './header.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HeadersService {

  private apiUrl = environment.apiUrl;
  
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
