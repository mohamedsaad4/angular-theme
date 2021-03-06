import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
   chart: any;
   chart2: any;
  constructor() {
   }

  ngOnInit() {
    this.chart = new Chart("skillsChart", {
      type: 'bar',
      data: {
        labels: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "SASS", "Angular", "PUG", "AJAX", "Gulp"], // your labels array
        datasets: [
          {
            label: 'Skills',
            data: [90, 70, 66, 75, 80, 73, 53, 86, 44,66, 100, 10], // your data array
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(243, 157, 237, 0.6)',
              'rgba(54, 247, 120, 0.6)',
              'rgba(240, 241, 110, 0.6)',
              'rgba(54, 176, 247, 0.6)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(243, 157, 237, 1)',
            'rgba(54, 247, 120, 1)',
            'rgba(240, 241, 110, 1)',
            'rgba(54, 176, 247, 1)'
        ],
        borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chart2 = new Chart("strenghthChart", {
      type: 'doughnut',
      data: {
        labels: ["HTML5", "CSS3", "ES6", "BEM, OOCSS", "Bootstrap3", "POSTCSS", "Angular 6", "Accessibility", "JSON"], // your labels array
        datasets: [
          {
            label: ' of Skills',
            data: [90, 70, 66, 55, 80, 48, 53, 86, 45], // your data array
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(243, 157, 237, 0.6)',
              'rgba(54, 247, 120, 0.6)',
              'rgba(124, 227, 236, 0.6)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(243, 157, 237, 1)'
        ],
        borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });
  }

}
