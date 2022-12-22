import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IScheduleSettingsDTO } from 'src/app/interface/IScheduleSettingsDTO';
import { ScheduleSettingsService } from '../schedule-settings-service.service';

@Component({
  selector: 'app-create-setting',
  templateUrl: './create-setting.component.html',
  styleUrls: ['./create-setting.component.css']
})
export class CreateSettingComponent implements OnInit {
  listSettings: Array<any> = [];
  setting: any;

  constructor(private http: HttpClient, private createSettingService: ScheduleSettingsService, private router: Router) { }

  ngOnInit() {
    this.setting = {};
  }
  toCreate(frm: NgForm) {
    console.log(`Adicionando registro com as seguintes informações:
    frm: ${frm.value}
    `);
    this.createSettingService.createSetting(this.setting).subscribe(response => {
      this.listSettings.push(response);
      frm.reset();
      this.router.navigate(['/ScheduleSettings']);
      alert("Configuração cadastrada com sucesso!✅");
    });
  }
}
