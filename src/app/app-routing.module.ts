import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCovidChartComponent } from './my-covid-chart/my-covid-chart.component';


const routes: Routes = [
  { path: '', component: MyCovidChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
