import { ListHospitalComponent } from './list-hospital/list-hospital.component';
import { CreateSpecialtyComponent } from './create-specialty/create-specialty.component';
import { CreateSettingComponent } from './create-setting/create-setting.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { RestrictedAccessPatientComponent } from './restricted-access-patient/restricted-access-patient.component';
import { RestrictedAccessConsultComponent } from './restricted-access-consult/restricted-access-consult.component';
import {FirstScreenComponent} from './first-screen/first-screen.component'
import { ConsultScheduleComponent } from './consult-schedule/consult-schedule.component';
import { RestrictedAccessComponent } from './restricted-access/restricted-access.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfessionalComponent } from './create-professional/create-professional.component';

const routes: Routes = [
  {path: '', component: FirstScreenComponent},
  {path: 'inicio', component: FirstScreenComponent},
  {path: 'inicio/agendar', component: ScheduleComponent},
  {path: 'inicio/consultarAgendamento', component: ConsultScheduleComponent},
  {path: 'inicio/acessoRestrito', component: RestrictedAccessComponent},
  {path: 'inicio/acessoRestrito/adicionarAgenda', component: CreateSettingComponent},
  {path: 'inicio/acessoRestrito/consultar', component: RestrictedAccessConsultComponent},
  {path: 'inicio/acessoRestrito/cadastrarHospital', component: CreateHospitalComponent},
  {path: 'inicio/acessoRestrito/cadastrarEspecialidade', component: CreateSpecialtyComponent},
  {path: 'inicio/acessoRestrito/cadastrarBeneficiario', component: RestrictedAccessPatientComponent},
  {path: 'inicio/acessoRestrito/listarHospital', component: ListHospitalComponent},
  {path:'inicio/acessoRestrito/cadastrarProfissional',component: CreateProfessionalComponent},
  {path: '**', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
