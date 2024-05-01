import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  listProduct: Product[] = [
    {id:1, name:'Coca Cola', description: ' Bebida con gas', price: 4, stock: 200},
    {id:2, name:'Corona', description: ' Bebida con alcohol', price: 5, stock: 100}
  ]

}
