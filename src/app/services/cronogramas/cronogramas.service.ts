import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cronograma } from './cronogramas.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CronogramasService {

  private api_Url = "https://127.0.0.1:8001/api";

  headers = new HttpHeaders()
  .set("Content-Type", "application/json")
  .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers, 
  };  
  
  constructor(private http: HttpClient) { }

  getCronogramas(): Observable<Cronograma[]>{
    return this.http.get<Cronograma[]>(this.api_Url + "/cronogramas");
  }
}
