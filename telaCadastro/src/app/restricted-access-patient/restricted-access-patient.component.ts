import { BeneficiarioCadastroService } from './../beneficiario-cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { IBeneficiarioDto } from 'src/app/interface/IBeneficiarioDTO';

@Component({
  selector: 'app-restricted-access-patient',
  templateUrl: './restricted-access-patient.component.html',
  styleUrls: ['./restricted-access-patient.component.css']
})
export class RestrictedAccessPatientComponent {
  //
  listSettings: Array<any> = [];
  setting: any;

  constructor(private http: HttpClient, private createSettingService: BeneficiarioCadastroService, private router: Router) { }

  ngOnInit() {
    this.setting = {};
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
