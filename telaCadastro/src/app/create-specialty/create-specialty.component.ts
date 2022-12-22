import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecialtyService } from '../specialty-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, NgForm } from '@angular/forms';
import { ISpecialtyDTO } from '../interface/ISpecialtyDTO';

@Component({
  selector: 'app-create-specialty',
  templateUrl: './create-specialty.component.html',
  styleUrls: ['./create-specialty.component.css']
})
export class CreateSpecialtyComponent {
  listSpecialty: Array<any> = [];
  specialty: any;

  constructor(private http: HttpClient, private registerSpecialtyService: SpecialtyService, private router: Router){ }

    ngOnInit(){
      this.specialty = {}
    }

    toCreate(frm: NgForm){
      console.log(`Adicionando registro com as seguintes informações:
      frm: ${frm.value}
    `);
      this.registerSpecialtyService.registerSpecilty(this.specialty).subscribe(response => {
        this.listSpecialty.push(response);
        frm.reset();
        alert("Especialidade Cadastrado com sucesso!✅")
      });
    }
}
