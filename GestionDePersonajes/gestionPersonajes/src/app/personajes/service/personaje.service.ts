import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interface/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) {
  }
  urlBase = 'http://localhost:3000/personajes';

  getPersonajes(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.urlBase);
  }
  
  postPersonajes(personaje : Personaje): Observable<Personaje>{
    return this.http.post<Personaje>(this.urlBase, personaje);
  }

  eliminarPersonaje(id: number): Observable<Personaje>{
    return this.http.delete<Personaje>(`${this.urlBase}/${id}`);
  }
}
