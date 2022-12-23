import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeneficiarioCadastroService } from '../beneficiario-cadastro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent {

  public IdBeneficiary: number = 0;

  constructor(private http: HttpClient, private deleteBeneficiary: BeneficiarioCadastroService, private router: Router) { }

  async toDelete(id: number) {
    console.log('excluindo...' + id);
    await this.deleteBeneficiary.removeBeneficiary(id).subscribe();
    alert(`Ação finalizada. Configuração de ID ${id} não consta mais em nosso sistema.`)
    console.log(`ID Config, de número ${id}, deletado com sucesso.`);
    // this.router.navigate(['/ScheduleSettings']);
  }

}
