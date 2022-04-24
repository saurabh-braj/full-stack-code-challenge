import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { chartsConfigurations, controlNames, graphTypes } from 'src/app/app.constants';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dynaminds-charts',
  templateUrl: './dynaminds-charts.component.html',
  styleUrls: ['./dynaminds-charts.component.scss']
})
export class DynamindsChartsComponent implements OnInit {

  chartsConfig = chartsConfigurations;
  graphTypesOptions = graphTypes;
  chartForm!: FormGroup;

  data: any[] = [];
  dataColor: any[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.chartForm = this.sharedService.initializeChartInputForm();
    this.chartForm.valueChanges.subscribe(() => {
      if (this.chartForm.valid) {
        this.generateGraph();
      }
    })
    this.generateGraph();
  }

  generateGraph() {
    const dataPoints: any[] = [];
    const dataPointsColor: any[] = [];

    let monthsData = this.chartForm.get(controlNames.MONTHS_DATA)?.value;
    let colorData = this.chartForm.get(controlNames.MONTHS_COLOR)?.value;

    Object.entries(monthsData).forEach( ([key, value]) => {
      dataPoints.push(value)
      this.data = dataPoints;
    });

    Object.entries(colorData).forEach( ([key, value]) => {
      dataPointsColor.push(value)
      this.dataColor = dataPointsColor;
    });
  }

}
