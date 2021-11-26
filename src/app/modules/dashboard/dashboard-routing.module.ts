import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PensumComponent} from './pensum/pensum.component';

const routes: Routes = [
  {
    path: 'pensum',
    component: PensumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
