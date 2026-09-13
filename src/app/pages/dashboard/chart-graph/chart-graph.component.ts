import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart-graph',
  templateUrl: './chart-graph.component.html',
  styleUrls: ['./chart-graph.component.scss']
})
export class ChartGraphComponent implements OnInit, OnChanges {
  @Input() data: any = [];

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

  public barChartLabels: string[] = [];

  public barChartData: any = [];

  public barChartType: 'bar' = 'bar';

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    aspectRatio: 16/9,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      },
    }
  };

  constructor(){}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['data']){
      if (!this.data || this.data.length === 0) {
        this.barChartLabels = ['No Data'];
        this.barChartData = [
          {
            data: [0],
            backgroundColor: [this.graphColorRGBA[this.graphColorRGBA.length - 1]]
          }
        ];
      }
      else {
        this.barChartLabels = this.data.map((items: any) => items?.name);
        this.barChartData = [
          {
            data: this.data.map((items: any) => items?.value),
            backgroundColor: [...this.graphColorRGBA]
          }
        ];
      }
    }
  }
}
