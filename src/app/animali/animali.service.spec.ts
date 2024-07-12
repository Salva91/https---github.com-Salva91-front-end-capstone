import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnimal } from '../Models/ianimal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimaliService {

  // L'URL del backend per gli animali
  private apiUrl = 'http://localhost:8080/animali'; // Assumendo che il backend stia girando su localhost:8080

  constructor(private http: HttpClient) { }

  // Metodo per creare un animale
  createAnimale(animale: IAnimal): Observable<IAnimal> {
    return this.http.post<IAnimal>(this.apiUrl, animale);
  }

  // Metodo per aggiornare un animale
  updateAnimale(id: number, animale: IAnimal): Observable<IAnimal> {
    return this.http.put<IAnimal>(`${this.apiUrl}/${id}`, animale);
  }

  // Metodo per eliminare un animale
  deleteAnimale(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Metodo per ottenere tutti gli animali
  getAnimali(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(this.apiUrl);
  }

  // Metodo per ottenere un animale per ID
  getAnimaleById(id: number): Observable<IAnimal> {
    return this.http.get<IAnimal>(`${this.apiUrl}/${id}`);
  }

  // Metodo per ottenere animali per tipo
  getAnimaliByTipo(tipo: string): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(`${this.apiUrl}/tipo/${tipo}`);
  }
}
