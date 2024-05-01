import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    this.form= this.fb.group({
      name:['',Validators.required],
      descripcion:['',Validators.required],
      price:['',Validators.required],
      stock:['',Validators.required]
    })
  }

}
