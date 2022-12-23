import { ListProfessionalComponent } from './list-professional/list-professional.component';
import { ListSpecialtyComponent } from './list-specialty/list-specialty.component';
import { ListHospitalComponent } from './list-hospital/list-hospital.component';
import { CreateSpecialtyComponent } from './create-specialty/create-specialty.component';
import { CreateSettingComponent } from './create-setting/create-setting.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { RestrictedAccessPatientComponent } from './restricted-access-patient/restricted-access-patient.component';
import { RestrictedAccessConsultComponent } from './restricted-access-consult/restricted-access-consult.component';
import {FirstScreenComponent} from './first-screen/first-screen.component'
import { ConsultScheduleComponent } from './consult-schedule/consult-schedule.component';
import { RestrictedAccessComponent } from './restricted-access/restricted-access.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfessionalComponent } from './create-professional/create-professional.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { DeleteHospitalComponent } from './delete-hospital/delete-hospital.component';
import { DeleteEspecialidadeComponent } from './delete-especialidade/delete-especialidade.component';


const routes: Routes = [
  {path: '', component: FirstScreenComponent},
  {path: 'inicio', component: FirstScreenComponent},
  {path: 'inicio/criarAgendamento', component: CreateScheduleComponent},
  {path: 'inicio/consultarAgendamento', component: ConsultScheduleComponent},
  {path: 'inicio/acessoRestrito', component: RestrictedAccessComponent},
  {path: 'inicio/acessoRestrito/adicionarAgenda', component: CreateSettingComponent},
  {path: 'inicio/acessoRestrito/consultar', component: RestrictedAccessConsultComponent},
  {path: 'inicio/acessoRestrito/cadastrarHospital', component: CreateHospitalComponent},
  {path: 'inicio/acessoRestrito/cadastrarEspecialidade', component: CreateSpecialtyComponent},
  {path: 'inicio/acessoRestrito/cadastrarBeneficiario', component: RestrictedAccessConsultComponent},
  {path: 'inicio/acessoRestrito/listarHospital', component: ListHospitalComponent},
  {path: 'inicio/acessoRestrito/listarEspecialidade', component: ListSpecialtyComponent},
  {path: 'inicio/acessoRestrito/listarProfissionais', component: ListProfessionalComponent},
  {path: 'inicio/acessoRestrito/listarBeneficiario', component: RestrictedAccessPatientComponent},
  {path:'inicio/acessoRestrito/cadastrarProfissional',component: CreateProfessionalComponent},
  {path: 'inicio/acessoRestrito/deletarBeneficiario', component: DeletePatientComponent},
  {path: 'inicio/acessoRestrito/deletarHospital', component: DeleteHospitalComponent},
  {path: 'inicio/acessoRestrito/deletarEspecialidade', component: DeleteEspecialidadeComponent},
  {path: '**', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
