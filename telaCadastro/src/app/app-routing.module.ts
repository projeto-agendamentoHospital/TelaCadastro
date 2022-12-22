import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { RestrictedAccessProfessionalComponent } from './restricted-access-professional/restricted-access-professional.component';
import { RestrictedAccessPatientComponent } from './restricted-access-patient/restricted-access-patient.component';
import { RestrictedAccessConsultComponent } from './restricted-access-consult/restricted-access-consult.component';
import {FirstScreenComponent} from './first-screen/first-screen.component'
import { ConsultScheduleComponent } from './consult-schedule/consult-schedule.component';
import { RestrictedAccessComponent } from './restricted-access/restricted-access.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FirstScreenComponent},
  {path: 'inicio', component: FirstScreenComponent},
  {path: 'inicio/agendar', component: ScheduleComponent},
  {path: 'inicio/consultarAgendamento', component: ConsultScheduleComponent},
  {path: 'inicio/acessoRestrito', component: RestrictedAccessComponent},
  {path: 'inicio/acessoRestrito/consultar', component: RestrictedAccessConsultComponent},
  {path: 'inicio/acessoRestrito/consultar/cadastrarHospital', component: CreateHospitalComponent},
  {path: 'inicio/acessoRestrito/cadastrarBeneficiario', component: RestrictedAccessPatientComponent},
  {path: 'inicio/acessoRestrito/cadastrarProfissional', component: RestrictedAccessProfessionalComponent},
  {path: '**', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
