import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntos } from '../../../interface/puntos';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SitiosService {

  todosSitios:Puntos[]= [];
  private myAppUrl2: string;
   private myApiUrl2: string;


  constructor(
    private http: HttpClient,
  ) {
    this.myAppUrl2 = environment.endpoint;
    this.myApiUrl2 = 'api/sitios/'
  }

  getListSitio(): Observable<Puntos[]>{
    return this.http.get<Puntos[]>(this.myAppUrl2 + this.myApiUrl2);
  }
  deleteSitio(id:number):Observable<void>{
    return this.http.delete<void>(this.myAppUrl2 + this.myApiUrl2+id)
  }
  saveSitio(product:Puntos): Observable<void>{
    return this.http.post<void>(this.myAppUrl2 + this.myApiUrl2, product)
  }
  getSitio(id: number):Observable<Puntos>{
    return this.http.get<Puntos>(this.myAppUrl2 + this.myApiUrl2+id)
  }
  updateSitio(id: number, product: Puntos): Observable<void>{
    return this.http.put<void>(this.myAppUrl2 + this.myApiUrl2 + id, product)
  }


  
}
