import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalService } from '../hospital-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, NgForm } from '@angular/forms';
import { IHospitalDTO } from '../interface/IHospitalDTO';



@Component({
  selector: 'app-create-hospital',
  templateUrl: './create-hospital.component.html',
  styleUrls: ['./create-hospital.component.css']
})
export class CreateHospitalComponent {
  listHospital: Array<any> = [];
  hospital: any;

  constructor(private http: HttpClient, private registerHospitalService: HospitalService, private router: Router) { }

  ngOnInit() {
    this.hospital = {};
  }

  toCreate(frm: NgForm) {
    console.log(`Adicionando registro com as seguintes informações:
    frm: ${frm.value}
    `);
    this.registerHospitalService.registerHospital(this.hospital).subscribe(response => {
      this.listHospital.push(response);
      frm.reset();
      alert("Hospital Cadastrado com sucesso!✅");
    });
  }
}
