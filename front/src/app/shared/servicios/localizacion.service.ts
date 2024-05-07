import { core } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  constructor() {}
  
  localizacion: [number, number]=[2.1749920961128737 , 41.402754420866614]

  // Método para obtener la ubicación del usuario
  public getLocation(): Observable<[number, number]> {
    return new Observable((observer: Observer<[number, number]>) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location: [number, number] = [position.coords.longitude, position.coords.latitude];
            this.localizacion=location
            observer.next(location);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocalización no disponible en este navegador.');
      }
    });
  }
  }






