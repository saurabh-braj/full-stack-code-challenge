import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DynamindsChartsComponent } from './dynaminds-charts/dynaminds-charts.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent , 
  children: [
    { path: '', redirectTo: 'dynaminds-charts', pathMatch: 'full' },
    { path: 'dynaminds-charts', component: DynamindsChartsComponent }
  ]  
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
