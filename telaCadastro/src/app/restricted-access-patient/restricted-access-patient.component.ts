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

    this.createSettingService.getAll().subscribe(response => {
      this.listSettings = response ;
      console.log("lista antes");
      console.log(this.listSettings);
    });

  }

  delete( id : number) {
    this.createSettingService.removeBeneficiary(id);
  }
}
