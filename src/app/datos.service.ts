import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  URL = 'http://prueba';
 

  retornar() {
    return this.http.get(this.URL);
  }  
}

