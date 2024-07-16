import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnimal } from '../Models/ianimal';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimaliService {

  private apiUrl = 'http://localhost:8080/animali';

  constructor(private http: HttpClient) { }

    createAnimale(animale: Partial<IAnimal>): Observable<IAnimal> {
      return this.http.post<IAnimal>(this.apiUrl, animale);
    }

    updateAnimale(id: number, animale: IAnimal): Observable<IAnimal> {
      return this.http.put<IAnimal>(`${this.apiUrl}/${id}`, animale);
    }

    eliminaAnimale(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
    }


    getAnimali(): Observable<IAnimal[]> {
      return this.http.get<IAnimal[]>(this.apiUrl);
    }

    getAnimaleById(id: number): Observable<IAnimal> {
      return this.http.get<IAnimal>(`${this.apiUrl}/${id}`);
    }

    getAnimaliByTipo(tipo: string): Observable<IAnimal[]> {
      return this.http.get<IAnimal[]>(`${this.apiUrl}/tipo/${tipo}`);
    }
  }
