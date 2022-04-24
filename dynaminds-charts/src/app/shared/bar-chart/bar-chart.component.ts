import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() data!: any[];
  @Input() dataColor!: any[];

  chart!: Chart;

  constructor() { }

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
          type: 'column'
        },
        title: {
          text: 'Market Qtr Report',
          style: {
            color: 'black',
            fontFamily: 'Roboto Slab, serif',
            fontWeight: 'bold'
          }
        },
        plotOptions: {
          column: {
            showInLegend: true
          }
        },
        xAxis: {
          title: {
            text: 'Months',
            style: {
              color: 'black',
              fontFamily: 'Roboto Slab, serif',
              fontSize: '12px',
              fontWeight: 'bold'
            }
          },
          categories: [
              'January',
              'Febuary',
              'March'
          ],
          labels: {
            rotation: -45,
            style: {
              fontSize: '12px',
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 'bold',
              color: '#262670'
          }
          },
          crosshair: true
        },
        yAxis: {
          min: 1000,
          title: {
            text: 'Monthy Revenue',
            style: {
              color: 'black',
              fontFamily: 'Roboto Slab, serif',
              fontSize: '12px',
              fontWeight: 'bold'
            }
          },
        },
        series: [
          {
            name: 'Market Qtr Report',
            type: 'column',
            data: [
              {
                name: 'January',
                y: this.data[0],
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
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.2f}',
              y: 20,
              style: {
                  fontSize: '14px',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto Slab, serif',
              }
          }
          }
        ],
      });
    }
  }
}
