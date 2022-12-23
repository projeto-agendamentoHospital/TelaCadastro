import { BeneficiarioCadastroService } from './../beneficiario-cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component,} from '@angular/core';
import { map } from 'rxjs';
import { IBeneficiarioDto } from 'src/app/interface/IBeneficiarioDTO';

@Component({
  selector: 'app-restricted-access-patient',
  templateUrl: './restricted-access-patient.component.html',
  styleUrls: ['./restricted-access-patient.component.css']
})
export class RestrictedAccessPatientComponent {
  //
  listBeneficiary: IBeneficiarioDto[] = [];

  constructor(private http: HttpClient, private getAllBeneficiary: BeneficiarioCadastroService,  private router: Router) {
    this.toList();
    this.getAll();
  }

  toList() {
    this.listBeneficiary = [];

    this.http
      .get('https://localhost:7114/Beneficiary')
      .pipe(
        map((response: any) => {
          return Object.values(response);
        })
      )
      .subscribe((data) => {
        for (let index = 0; index < data.length; index++) {
          let dataJson: any = data[index];

          console.log(data.filter((item: any) => item.ativo == true))

          this.listBeneficiary.push(dataJson as IBeneficiarioDto);
        }

      });
  }

   getAll(): void {
    this.getAllBeneficiary.getAll().subscribe((beneficiary) => (this.listBeneficiary = beneficiary));
  }

  delete(id: number) {
    console.log(`${id} deletado com sucesso.`);
    this.http.delete(`https://localhost:7114/DeleteBeneficiary?id=${id}`)
      .subscribe((data) => {
        console.log(`Linhas executadas no método de remover do banco ${JSON.stringify(data)}`);
        this.toList();
      });
  }
}
