import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { chartTypes, colorLabels, controlNames } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private formBuilder: FormBuilder) { }

  initializeChartInputForm(): FormGroup {
    return this.formBuilder.group({
      [controlNames.MONTHS_DATA]: this.formBuilder.group({
        [controlNames.JANUARY_DATA]: [25000, Validators.required],
        [controlNames.FEBUARY_DATA]:[25000, Validators.required],
        [controlNames.MARCH_DATA]: [50000, Validators.required],
      }),
      [controlNames.MONTHS_COLOR]: this.formBuilder.group({
        [controlNames.JANUARY_COLOR]: [colorLabels.PURPLE, Validators.required],
        [controlNames.FEBUARY_COLOR]:[colorLabels.GREEN, Validators.required],
        [controlNames.MARCH_COLOR]: [colorLabels.ORANGE, Validators.required],
      }),
      [controlNames.GRAPH_TYPE]:[chartTypes.PIE, Validators.required]
    });
  }
}
