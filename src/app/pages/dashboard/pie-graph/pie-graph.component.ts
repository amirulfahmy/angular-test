import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.scss']
})
export class PieGraphComponent implements OnInit, OnChanges {
  @Input() data: any = [];
  
  graphColor = [
  '#5B8FF9',
  '#EB2F96',
  '#61DDAA',
  '#F6903D',
  '#65789B',
  '#F6BD16',
  '#7262FD',
  '#78D3F8',
  '#9661BC',
  '#008685',
  '#F08BB4',
  '#C2C8D5',
  '#A0D911',
  '#FAAD14',
  '#13C2C2',
  '#2F54EB',
  '#52C41A',
  '#FA8C16',
  '#722ED1',
  '#BFBFBF'
  ];

  graphColorRGBA = [
    'rgba(91, 143, 249, 1)',   // #5B8FF9
    'rgba(235, 47, 150, 1)',   // #EB2F96
    'rgba(97, 221, 170, 1)',   // #61DDAA
    'rgba(246, 144, 61, 1)',   // #F6903D
    'rgba(101, 120, 155, 1)',  // #65789B
    'rgba(246, 189, 22, 1)',   // #F6BD16
    'rgba(114, 98, 253, 1)',   // #7262FD
    'rgba(120, 211, 248, 1)',  // #78D3F8
    'rgba(150, 97, 188, 1)',   // #9661BC
    'rgba(0, 134, 133, 1)',    // #008685
    'rgba(240, 139, 180, 1)',  // #F08BB4
    'rgba(194, 200, 213, 1)',  // #C2C8D5
    'rgba(160, 217, 17, 1)',   // #A0D911
    'rgba(250, 173, 20, 1)',   // #FAAD14
    'rgba(19, 194, 194, 1)',   // #13C2C2
    'rgba(47, 84, 235, 1)',    // #2F54EB
    'rgba(82, 196, 26, 1)',    // #52C41A
    'rgba(250, 140, 22, 1)',   // #FA8C16
    'rgba(114, 46, 209, 1)',   // #722ED1
    'rgba(191, 191, 191, 1)'   // #BFBFBF
  ];
  public doughnutChartLabels: string[] = [];

  public doughnutChartData: any = [];

  public doughnutChartType: 'doughnut' = 'doughnut';

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    datasets: {
      doughnut: {
        borderJoinStyle: 'round',
        borderRadius: 0,
        rotation: 270,
        backgroundColor: [...this.graphColorRGBA]
      },
    },
    responsive: true,
    cutout: '70%',
    aspectRatio: 16/9,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      },
    }
  };

  constructor(

  ){}

  ngOnInit(): void {
      
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['data']){
      if (!this.data || this.data.length === 0) {
        this.doughnutChartLabels = ['No Data'];
        this.doughnutChartData = [
          {
            data: [100],
            backgroundColor: [this.graphColorRGBA[this.graphColorRGBA.length - 1]]
          }
        ];
      }
      else {
        this.doughnutChartLabels = this.data.map( (items: any) => items?.name);
        this.doughnutChartData = [
          {
            data: this.data.map((items: any) => items?.value),
            backgroundColor: [...this.graphColorRGBA]
          }
        ];
      }
    
    }
  }
}