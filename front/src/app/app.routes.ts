import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/home/list-products/list-products.component';
import { AddEditProductComponent } from './components/home/add-edit-product/add-edit-product.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';
import { GraficsComponent } from './components/grafics/grafics.component';


export const routes: Routes = [
    {path:'', component: ListProductsComponent},
    {path:'maps', component: MapaComponent},
    {path:'calendar', component: FullCalendarComponent},
    {path:'grafics', component:GraficsComponent},
    {path:'add', component: AddEditProductComponent},
    {path:'edit/:id', component: AddEditProductComponent},
    {path:'**', redirectTo: '', pathMatch:'full'},
    
];
