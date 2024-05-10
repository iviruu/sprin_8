import { Component } from '@angular/core';
import { MapService } from '../../../shared/servicios/maps/map.service';
import { CommonModule } from '@angular/common';
import { Feature } from '../../../interface/places';
import { SitiosService } from '../../../shared/servicios/maps/sitios.service';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {

  public selectedId: string = '';

  constructor(
    private mapService:MapService,
    private sitios: SitiosService,
  ){}

  get isLoadingPlaces(){
    return this.mapService.isLoadingPlaces;
  }

  get places(){
    return this.mapService.places;
  }

  flyTo(place: Feature){
    this.selectedId = place.id

    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat])

  }
  savePlace(i:string){
    this.mapService.savePlace(i)
  }




}
