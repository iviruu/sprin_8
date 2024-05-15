import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../../interface/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../shared/servicios/product/product.service';
import { ProgressBarComponent } from '../../../shared/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule,ProgressBarComponent],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  loading:boolean = false;
  id: number;
  operacion: string = 'Agregar ';
  enviar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private serviceProduct: ProductService,
    private router:Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    
  ){
    this.form= this.fb.group({
      name:['',Validators.required],
      descripcion:['',Validators.required],
      price:[null,Validators.required],
      stock:[null,Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    
  }


  ngOnInit(): void {
    this.enviar = false;
    
    if(this.id != 0){
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number){
    this.loading = true;
    this.serviceProduct.getProduct(id).subscribe((data:Product) => {
      this.loading = false;
      this.form.setValue({
        name: data.name,
        descripcion: data.descripcion,
        price: data.price,
        stock: data.stock
      })
    })
  }
  addProduct(){
    this.enviar = true;
    if (this.form.invalid) {
      return;
    }
    const product: Product = {
      name: this.form.value.name,
      descripcion: this.form.value.descripcion,
      price: this.form.value.price,
      stock: this.form.value.stock
    }
    this.loading = true;
    if(this.id != 0){
      //Es editar
      product.id = this.id;
      this.serviceProduct.updateProduct(this.id, product).subscribe(() =>{
        this.toastr.info(`El producto ${product.name} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/']);
      })


    }else{ // es agregar
      this.serviceProduct.saveProduct(product).subscribe(()=>{
        this.toastr.success(`El producto ${product.name} fue registado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/']);
      })
    } 


   }

}
