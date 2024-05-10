import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../shared/servicios/maps/map.service';
import { SitiosService } from '../../../shared/servicios/maps/sitios.service';
import { Puntos } from '../../../interface/puntos';
import { CommonModule, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkerService } from '../../../shared/servicios/maps/marker.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule,NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit {
  
  todosSitios:Puntos[]=[]
  checkboxForm: FormGroup;
  categories = ['theatre','cinema', 'restaurant'];
  filteredSitios = this.todosSitios;
  categorizedItems: { [key: string]: any[] } = {};
  todosSelecionados:Puntos[]=[];

  constructor(
    private sitiosServeis: SitiosService,
    private fb: FormBuilder,
    private marker: MarkerService,
  ){
    this.checkboxForm = this.fb.group({});
    this.categories.forEach(category => this.checkboxForm.addControl(category, this.fb.control(false)));
  }
   
  
  



  ngOnInit(): void {
    this.sitiosServeis.getListSitio().subscribe((data:Puntos[])=>{
      this.todosSitios= data
    })

    this.checkboxForm.valueChanges.subscribe(selectedCategories => {
      this.sitiosServeis.getListSitio().subscribe((data:Puntos[])=>{
        this.todosSitios= data
      })
      // Inicializar la lista filtrada como vacía
      this.filteredSitios = [];

      // Recorrer cada categoría para filtrar los sitios seleccionados
      Object.keys(selectedCategories).forEach(category => {
        if (selectedCategories[category]) {
          const sitiosFiltradosPorCategoria = this.todosSitios.filter(item =>
            item.category?.toLowerCase().includes(category.toLowerCase())
          );
          // Añadir sitios filtrados a `filteredSitios`
          this.filteredSitios = [...this.filteredSitios, ...sitiosFiltradosPorCategoria];
        }
      });
      this.marker.createMarkerSitiosFavoritos(this.filteredSitios)
    });
  }
  
  
}
