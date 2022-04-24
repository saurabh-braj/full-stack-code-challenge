import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { colorsList } from '../app.constants';

@Component({
  selector: 'app-dynaminds-select',
  template: `
  <div class="form-group" [formGroup]="rootForm">
    <div [formGroupName]="chartFormGroupName">
      <label>{{ label }}</label>
      <select class="form-control form-select mt-1" [formControlName]="chartFormControlName" style="text-transform: capitalize;">
          <option *ngFor="let option of colorsOptions" style="text-transform: capitalize;"
            [selected]="option === rootForm.get(chartFormGroupName)?.value[chartFormControlName]">
            {{ option }}
          </option>
      </select>
    </div>
</div>
`
})
export class DynamindsSelectComponent implements OnInit {

  @Input() label!: string;
  @Input() chartFormControlName!: string;
  @Input() chartFormGroupName!: string;
  @Input() rootForm!: FormGroup;

  colorsOptions = colorsList;

  constructor() { }

  ngOnInit(): void {
  }

}
