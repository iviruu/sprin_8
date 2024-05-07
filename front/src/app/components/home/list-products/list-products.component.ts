import { Component, OnInit} from '@angular/core';
import { Product } from '../../../interface/product';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../../shared/servicios/product/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProgressBarComponent } from '../../../shared/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterModule,RouterLink,CurrencyPipe,ProgressBarComponent,CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  listProduct: Product[] = [];
  loading: boolean= false;
  constructor(
    private productService: ProductService,
    private toastr: ToastrService, 
  ){}

  ngOnInit(): void {
    this.getListproducts();
  }

  getListproducts(){
    this.loading= true;
    this.productService.getListProducts().subscribe((data:Product[])=>{
      this.listProduct= data;
      this.loading=false;
    })
  }
  deleteProduct(id:number){
    this.loading= true;
    this.productService.deleteProduct(id).subscribe(() =>{
      this.getListproducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }


}
