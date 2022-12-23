import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IBeneficiarioDto } from '../interface/IBeneficiarioDTO';
import { BeneficiarioCadastroService } from '../beneficiario-cadastro.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-restricted-access-consult',
  templateUrl: './restricted-access-consult.component.html',
  styleUrls: ['./restricted-access-consult.component.css']
})
export class RestrictedAccessConsultComponent {
  listBeneficiario: Array<any> = [];
  beneficiario: any;

  constructor(private http: HttpClient, private createBeneficiarioService: BeneficiarioCadastroService, private router: Router) { }

  ngOnInit() {
    this.beneficiario = {};
  }

  toCreate(frm: NgForm) {
    console.log(`Adicionando registro com as seguintes informações:
    frm: ${frm.value}
    `);
    this.createBeneficiarioService.createSetting(this.beneficiario).subscribe(response => {
      console.log('....' + this.beneficiario);
      this.listBeneficiario.push(response);
      frm.reset();
      this.router.navigate(['https://localhost:7114/CreateBeneficiary']);
      alert("Beneficiario cadastrado(a) com sucesso!✅");
    });
  }


}
