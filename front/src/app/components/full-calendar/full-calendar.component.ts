import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendar, CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { DateClickArg } from '@fullcalendar/interaction';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../../shared/servicios/fullCalendar/calendar.service';
import { Events } from '../../interface/events';







@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [FullCalendarModule, CommonModule],
  templateUrl: './full-calendar.component.html',
  styleUrl: './full-calendar.component.css'
})
export class FullCalendarComponent implements OnInit{
 
  constructor(
    private calendarService: CalendarService,
  ){
    this.todosEventos= []
  }

  todosEventos:Events[];


  ngOnInit(): void {
    this.getListaEvents;
  }





  calendarOptions: CalendarOptions= {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: esLocale,
    dateClick: (arg) => this.handleDateClick(arg),
  };
  async getEvents(): Promise<Events[]> {

    const events: Events[] = this.todosEventos;

    // Simula un retraso de 1 segundo, solo para demostración
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Retorna los eventos
    return events;
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  getListaEvents(){
    this.calendarService.getListEvents().subscribe((data:Events[]) =>{
      this.todosEventos= data;
      console.log(data,'son los eventos')
    })

  }



  }








