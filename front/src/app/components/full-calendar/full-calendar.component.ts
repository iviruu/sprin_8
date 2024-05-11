import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import {CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { DateClickArg } from '@fullcalendar/interaction';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../../shared/servicios/fullCalendar/calendar.service';
import { Events } from '../../interface/events';
import { EventComponent } from './event/event.component';







@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [FullCalendarModule, CommonModule, EventComponent],
  templateUrl: './full-calendar.component.html',
  styleUrl: './full-calendar.component.css'
})
export class FullCalendarComponent implements OnInit{
 
  events:EventInput[]= [];
  modal: boolean = false;
  

  
  constructor(
    private calendarService: CalendarService,
  ){
    this.calendarService.modal$.subscribe((date: boolean) => {
      this.modal= date
      this.getListaEvents();
    })
  }

  ngOnInit(): void {
    this.getListaEvents();

  }


  calendarOptions: CalendarOptions= {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: esLocale,
    events: this.events,
    eventClick: (info) => this.handleInfoClick(info),
    dateClick:(arg)  => this.handleDateClick(arg),
  };
  
  handleInfoClick(info: EventClickArg) {
    this.modal = true;
    this.calendarService.idEvent= '';
    this.calendarService.idEvent= info.event.id
  }
  handleDateClick(arg: DateClickArg){
    this.calendarService.idEvent= '';
    this.modal = true ;
    this.calendarService.dataEvent= arg.dateStr;
  }

  getListaEvents(){
    this.calendarService.getListEvents().subscribe((data:Events[]) =>{
      this.events = data.map(event =>({
        id: String(event.id), // Convierte el id a string
        title: event.title,
        start: event.start,
        backgroundColor: event.backgroundColor
      }));

      this.calendarOptions = {
        ...this.calendarOptions,
        events: this.events
      }; 
    });
  }
  
  }








