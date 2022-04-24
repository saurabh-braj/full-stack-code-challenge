import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynaminds-input',
  template: `
  <div class="form-group" [formGroup]="rootForm">
    <div [formGroupName]="chartFormGroupName">
      <label>{{ label }}</label>
      <input type="number" class="form-control mt-1" [formControlName]="chartFormControlName">
    </div>
</div>
`
})
export class DynamindsInputComponent implements OnInit {

  @Input() label!: string;
  @Input() chartFormControlName!: string;
  @Input() chartFormGroupName!: string;
  @Input() rootForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
