import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../../shared/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';
import { CalendarService } from '../../../shared/servicios/fullCalendar/calendar.service';
import { Events } from '../../../interface/events';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule,ProgressBarComponent, FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';
  date: string = '';

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private calendarService: CalendarService,
    
  ){
    this.id = Number(this.calendarService.idEvent);
    this.date = this.calendarService.dataEvent;


        this.form= this.fb.group({
      title:['',Validators.required],
      start:[this.date,[Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      backgroundColor:['',Validators.required]
    });
  }


  ngOnInit(): void {
    
    if(this.id != 0){
      this.operacion = 'Editar ';
      this.getEvent(this.id);
    }
  }

  close(date:boolean){
    this.calendarService.upDateModal(date);
  }
  deleteEvent(){
    this.calendarService.deleteEvent(this.id).subscribe(() =>{
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
      this.close(false);
    })
  }
  getEvent(id: number){
    this.calendarService.getEvent(id).subscribe((data:Events) => {
      this.form.patchValue(data);
    })
  }
  addEvent(){
    if (this.form.invalid) {
      this.toastr.error('Por favor, completa todos los campos', 'Error');
      return;
    }
    const event: Events = {
      start: this.form.value.start,
      title: this.form.value.title,
      backgroundColor: this.form.value.backgroundColor
    }
    if(this.id != 0){
      //Es editar
      event.id = this.id;
      this.calendarService.updateEvent(this.id, event).subscribe(() =>{
        this.toastr.info(`El producto ${event.title} fue actualizado con exito`, 'Producto actualizado');
        this.close(false);
      })
    }else{ // es agregar
      this.calendarService.saveEvent(event).subscribe(()=>{
        this.toastr.success(`El producto ${event.title} fue registado con exito`, 'Producto registrado');
        this.close(false);
      })
    } 
   }

  }




