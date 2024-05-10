import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Events } from '../../../interface/events';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private myAppUrl2: string;
   private myApiUrl2: string;


  constructor(
    private http: HttpClient  ,
  ) {
    this.myAppUrl2 = environment.endpoint;
    this.myApiUrl2 = 'api/events/'
  }

  getListEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this.myAppUrl2 + this.myApiUrl2);
  }
  deleteEvent(id:number):Observable<void>{
    return this.http.delete<void>(this.myAppUrl2 + this.myApiUrl2+id)
  }
  saveEvent(product:Events): Observable<void>{
    return this.http.post<void>(this.myAppUrl2 + this.myApiUrl2, product)
  }
  getEvent(id: number):Observable<Events>{
    return this.http.get<Events>(this.myAppUrl2 + this.myApiUrl2+id)
  }
  updateEvent(id: number, product: Events): Observable<void>{
    return this.http.put<void>(this.myAppUrl2 + this.myApiUrl2 + id, product)
  }

}
