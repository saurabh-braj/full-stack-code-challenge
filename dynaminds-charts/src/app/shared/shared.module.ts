import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamindsInputComponent } from './dynaminds-input.component';
import { DynamindsSelectComponent } from './dynaminds-select.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const sharedComponents = [ DynamindsInputComponent, DynamindsSelectComponent, PieChartComponent, BarChartComponent, LineChartComponent ];

@NgModule({
  declarations: [ sharedComponents ],
  imports: [ 
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    ChartModule
  ],
  exports: [ sharedComponents, MatCardModule, ReactiveFormsModule, ChartModule ]
})
export class SharedModule { }
