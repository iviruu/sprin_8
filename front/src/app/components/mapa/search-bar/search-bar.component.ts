import { Component } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import { MapService } from '../../../shared/servicios/maps/map.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SearchItemComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  constructor(
    private mapService: MapService,
  ){}

  private debounceTsimer?: NodeJS.Timeout;

  onQueryChanged( query: string = '' ){

    if (this.debounceTsimer) clearTimeout(this.debounceTsimer);

    this.debounceTsimer = setTimeout(() => {
      this.mapService.getPlacesByQuery(query)
    }, 500);


  }




}
