import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Instructor } from './instructor.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InstructoresService {

  private apiUrl = environment.apiUrl;

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  getInstructores(): Observable<Instructor[]>{
    return this.http.get<Instructor[]>(this.apiUrl + "/instructores");    
  }
}
