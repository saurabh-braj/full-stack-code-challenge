import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() data!: any[];
  @Input() dataColor!: any[];

  chart!: Chart;

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createChart();
  }

  createChart(): void {
    if (this.data.length && this.dataColor.length) {
      this.chart = new Chart({
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Market Qtr Report',
          style: {
            fontWeight: 'bold',
            fontFamily: 'Roboto Slab, serif',
        }
        },
        // colors: this.dataColor,
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name} Revenue</b> <br><br> {point.y:.2f} - <span style="color:#262670">{point.percentage:.2f} % </span>',
                  //distance: -60,
              },
              showInLegend: true,
          }
      },
      legend: {
        verticalAlign: 'top'
      },
        series: [
          {
            type: 'pie',
            data: [
              {
                name: 'January',
                y: this.data[0],
                sliced: true,
                selected: true,
                color: this.dataColor[0]
              },
              {
                name: 'Febuary',
                y: this.data[1],
                color: this.dataColor[1]
              },
              {
                name: 'March',
                y: this.data[2],
                color: this.dataColor[2]
              }
            ],
          }
        ]
      });
    }
  }

}
