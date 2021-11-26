import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PensumComponent} from './pensum/pensum.component';
import {DashboardRoutingModule} from './dashboard-routing.module'
import {SharedModule} from 'app/common/shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PensumComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule {
}
