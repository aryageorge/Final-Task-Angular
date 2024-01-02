import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mycharts',
  templateUrl: './mycharts.component.html',
  styleUrls: ['./mycharts.component.scss']
})
export class MychartsComponent implements OnInit {
  
   chart=[];
 
  

  

  ngOnInit( ) {

    

    new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Bar Chart'
        },
      },
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            type: 'bar',
            label: 'Absentees',
            data: [20, 30, 10, 50, 14],
            backgroundColor: ["darkblue","darkblue","darkblue","darkblue","darkblue"],
            borderColor: 'rgba(255,0,255,0.4)',
            
          },
         
          {
            type: 'bar',
            label: 'Presented',
            data: [186, 150, 190, 170, 180].reverse(),
            backgroundColor:["maroon","maroon","maroon","maroon","maroon"],
            borderColor: 'rgba(0,0,255,0.4)',
           
          }
        ]
      }
    });

   

   

      new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Doughnut Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [250,50],
					backgroundColor: ["green","orange"],
					label: 'Dataset 1'
				}],
				labels: ['Active','Inactive']
			}
    })

  }
}

  
 


