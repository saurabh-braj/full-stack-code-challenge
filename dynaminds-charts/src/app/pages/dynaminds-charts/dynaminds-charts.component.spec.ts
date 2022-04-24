import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamindsChartsComponent } from './dynaminds-charts.component';

describe('DynamindsChartsComponent', () => {
  let component: DynamindsChartsComponent;
  let fixture: ComponentFixture<DynamindsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamindsChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamindsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
