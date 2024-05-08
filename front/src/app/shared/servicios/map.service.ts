import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Point, Popup } from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { Feature, PlacesResultes } from '../../interface/places';
import { LocalizacionService } from './localizacion.service';
import { SitiosService } from './sitios.service';
import { Puntos } from '../../interface/puntos';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  private map!: Map;
  public isLoadingPlaces: boolean = false;
  public places: Feature[]= [];
  private markers: Marker[]= [];

  get isMapReady(){
    return !!this.map
  }
  
  setMap( map: Map){
    this.map = map;
  }
  flyTo( coords: LngLatLike){
    if(!this.isMapReady) throw Error('El mapa no esta inicializado');
    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }

  constructor(
    private http: HttpClient,
    private local:LocalizacionService,
    private sitios: SitiosService,
    private router:Router,

  ) { }

  getPlacesByQuery( query: string= ''){
    this.isLoadingPlaces = true;
    this.http.get<PlacesResultes>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=${this.local.localizacion}&access_token=${environment.apiKey}`)
    .subscribe(resp =>{
      
      this.isLoadingPlaces= false;
      this.places = resp.features;
      this.createMarkerFromPlaces(this.places)
    })

  }

  createMarkerFromPlaces(places: Feature[]){
    if(!this.isMapReady) throw Error('El mapa no esta inicializado');

    this.markers.forEach(marker => marker.remove());
      const newMarkers = [];

      for(const place of places){
        const [ lng, lat] = place.center;
        const popup = new Popup()
        .setHTML(`
          <div class= ' text-dark'>
          <h6>${place.text}</h6>
          <span>${place.place_name}</span>
          </div>
          
        `);

        const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);

        newMarkers.push(newMarker)
      }

      this.markers = newMarkers;
  }

  savePlace(i: string): Puntos | undefined {
    for (const place of this.places) {
      if (place.id === i) {
        const { id, text, place_name, properties: {category}, geometry } = place;
        const sitio: Puntos= {
          id: id,
          text: text,
          place_name: place_name,
          geometry: geometry,
          category: category
        }
        
        this.addSitio(sitio);
        return  sitio;
        
      }
    }
    return undefined;  // Retorna undefined si no se encuentra ningún lugar con el id especificado
  }
  listaSitios:Puntos[]= []
  getListSitios(){
    
    this.sitios.getListSitio().subscribe((data:Puntos[])=>{
      
      
    })
  }

  addSitio(sitio: Puntos){
    this.sitios.saveSitio(sitio).subscribe(()=>{
    })
  }


}
