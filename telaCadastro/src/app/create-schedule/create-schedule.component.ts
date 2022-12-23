import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleServiceService } from '../schedule-service.service';
import { ScheduleSettingsService } from '../schedule-settings-service.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent {
  listSettings: Array<any> = [];
  schedule: any;

  constructor(private http: HttpClient, private createSchedule: ScheduleServiceService, private router: Router) { }

  ngOnInit() {
    this.schedule = {};
  }

  // toCreate(idHospital: number, idSpecialty: number, idProfessional: number, startDateHour: Date, finalDateHour: Date) {
  //   console.log(`Adicionando registro com as seguintes informações: 
  //               IdHospital: ${idHospital},
  //               IdEspecialidade: ${idSpecialty},
  //               IdProfissional: ${idProfessional},
  //               startDateHour: ${startDateHour},
  //               finalDateHour: ${finalDateHour}
  //               `);

  // }

  // toCreate(frm: FormGroup){
  //   console.log(`Adicionando registro com as seguintes informações: 
  //   frm: ${frm}
  //   `);
  //   this.createSettingService.createSetting(this.setting).subscribe(response => {
  //     this.listSettings.push(response);
  //   })

  toCreate(frm: NgForm) {
    console.log(`Adicionando agendamento com as seguintes informações: 
    frm: ${frm.value}
    `);
    this.createSchedule.createSetting(this.schedule).subscribe(response => {
      this.listSettings.push(response);
      frm.reset();
      this.router.navigate(['/']);
      alert("Agendamento cadastrado com sucesso!✅");
    });
  }
}

