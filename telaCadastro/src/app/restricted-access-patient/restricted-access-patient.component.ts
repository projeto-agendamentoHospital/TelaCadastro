import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBeneficiarioDto } from '../interface/IBeneficiarioDTO';

@Component({
  selector: 'app-restricted-access-patient',
  templateUrl: './restricted-access-patient.component.html',
  styleUrls: ['./restricted-access-patient.component.css']
})
export class RestrictedAccessPatientComponent {
  beneficiario!: IBeneficiarioDto;
  idBeneficiario!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.idBeneficiario = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.beneficiario = {
      id: this.idBeneficiario ?? 0,
      nome: '',
      cpf: '',
      tel: '',
      endereco: '',
      numeroCarteirinha: '',
      ativo: true,
      email: '',
      senha:'',
    }

    // BUSCAR NA API OS DADOS DO BENEFICIARIO QUE RECEBEMOS O ID NA URL
    if (this.idBeneficiario) {
      this.http
        .get(`https://localhost:7114/GetByID/${this.idBeneficiario}`)
        .subscribe((data) => {
          this.beneficiario = data as IBeneficiarioDto;
        });
    }

  }

  salvar() {

    if (this.validarInformacoes()) {
      console.log(`Objeto para salvar: ${JSON.stringify(this.beneficiario)}`);

      if (this.beneficiario.id == 0) {

        this.http.post('https://localhost:7114/CreateBeneficiary', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['listaBeneficiario']);
          });

          console.log(this.beneficiario.ativo)

      } else {
        this.http.patch('https://localhost:7114/UpdateBeneficiary/', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['listaBeneficiario']);
          });
      }

    } else {
      console.log('Erro na validação');
      // TRATAMENTO DE ERRO
      // ALERTA
      // BORDA VERMELHA
    }
  }

  validarInformacoes(): boolean {
    if (this.beneficiario.nome == '') {
      return false;
    }
    return true;
  }
}
