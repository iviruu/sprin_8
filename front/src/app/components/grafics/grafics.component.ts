import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-grafics',
  standalone: true,
  imports: [],
  templateUrl: './grafics.component.html',
  styleUrl: './grafics.component.css'
})
export class GraficsComponent implements OnInit {
  public chart!: Chart;
  public chart2!: Chart;


  ngOnInit(): void {

    this.chart = new Chart("chart", {
      type: 'line' as ChartType,
      data: {
        labels:[ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          backgroundColor:'red'
        }]
    },
    options:{
      responsive:true,
      maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
            
    }
    });

  this.chart2 = new Chart("chart2", {
    type: 'bar' as ChartType,
    data: {
      labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
  },
  options:{
    responsive:true,
    maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
          
  }
  });
  }
}
