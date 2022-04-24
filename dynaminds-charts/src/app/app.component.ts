import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-card>
    <div class="app-label-1 fw-bold">Dynaminds Monthly Revenue Chart</div>
  </mat-card>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'dynaminds-charts';
}
