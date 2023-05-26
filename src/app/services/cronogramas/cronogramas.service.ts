import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cronograma } from './cronogramas.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CronogramasService {

  private apiUrl = environment.apiUrl;

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers, 
  };  
  
  constructor(private http: HttpClient) { }

  getCronogramas(): Observable<Cronograma[]>{
    return this.http.get<Cronograma[]>(this.apiUrl + "/cronogramas");
  }
}
