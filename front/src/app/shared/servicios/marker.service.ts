import { Injectable } from '@angular/core';
import { Puntos } from '../../interface/puntos';
import { Map, Marker, Popup } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {



  private markers: Marker[]= [];
  private map!: Map;

  setMap( map: Map){
    this.map = map;
  }

  get isMapReady(){
    return !!this.map
  }

  constructor() { }



  createMarkerSitiosFavoritos(sitios: Puntos[]){
    
    if(!this.isMapReady) throw Error('El mapa no esta inicializado !');
    
    this.markers.forEach(marker => marker.remove());
      const newMarkers = [];

      for(const sitio of sitios){
        const [ lng, lat] = sitio.geometry.coordinates;
        const popup = new Popup()
        .setHTML(`
          <div class= ' text-dark'>
          <h6>${sitio.text}</h6>
          <span>${sitio.place_name}</span>
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

}
