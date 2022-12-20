import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ConsultScheduleComponent } from './consult-schedule/consult-schedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RestrictedAccessComponent } from './restricted-access/restricted-access.component';
import { RestrictedAccessPatientComponent } from './restricted-access-patient/restricted-access-patient.component';
import { RestrictedAccessProfessionalComponent } from './restricted-access-professional/restricted-access-professional.component';
import { RestrictedAccessConsultComponent } from './restricted-access-consult/restricted-access-consult.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    ConsultScheduleComponent,
    ScheduleComponent,
    RestrictedAccessComponent,
    RestrictedAccessPatientComponent,
    RestrictedAccessProfessionalComponent,
    RestrictedAccessConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
