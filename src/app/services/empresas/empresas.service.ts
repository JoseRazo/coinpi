import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from './empresa.interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private apiUrl = environment.apiUrl;

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.apiUrl + "/empresas");
  }
}
