import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ConsultScheduleComponent } from './consult-schedule/consult-schedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RestrictedAccessComponent } from './restricted-access/restricted-access.component';
import { RestrictedAccessPatientComponent } from './restricted-access-patient/restricted-access-patient.component';
import { RestrictedAccessProfessionalComponent } from './restricted-access-professional/restricted-access-professional.component';
import { RestrictedAccessConsultComponent } from './restricted-access-consult/restricted-access-consult.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { CreateSettingComponent } from './create-setting/create-setting.component';
import { CreateSpecialtyComponent } from './create-specialty/create-specialty.component';
import { ListHospitalComponent } from './list-hospital/list-hospital.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    ConsultScheduleComponent,
    ScheduleComponent,
    RestrictedAccessComponent,
    RestrictedAccessPatientComponent,
    RestrictedAccessProfessionalComponent,
    RestrictedAccessConsultComponent,
    CreateHospitalComponent,
    CreateSettingComponent,
    CreateSpecialtyComponent,
    ListHospitalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
