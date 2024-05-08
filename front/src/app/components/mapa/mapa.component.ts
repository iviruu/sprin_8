import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl, {Map, Marker, Popup} from 'mapbox-gl';
import { LocalizacionService } from '../../shared/servicios/localizacion.service';
import { MapService } from '../../shared/servicios/map.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MarkerService } from '../../shared/servicios/marker.service';





@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [SearchBarComponent,DropdownComponent],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit  {
  
  constructor(
    private localizacion: LocalizacionService,
    private mapService: MapService,
    private marker:MarkerService,
  ){}


@ViewChild('mapDiv')
mapDivElement!: ElementRef

ngAfterViewInit(): void {
  this.localizacion.getLocation().subscribe(location => {
    this.initializeMap(location);
  });
}

private initializeMap(location: [number, number]): void {
  const map = new Map({
    container: this.mapDivElement.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: location,
    zoom: 11,
  });
  
  const popup = new Popup()
  .setHTML(
    `
    <div class='text-primary'>
      <h6>Aquí estoy</h6>
      <span>Estoy en este lugar del mundo</span>
    </div>
      
  `);

  new Marker({ color: 'red'})
    .setLngLat( location)
    .setPopup(popup)
    .addTo( map)

  this.mapService.setMap( map);
  this.marker.setMap(map);
}





}
