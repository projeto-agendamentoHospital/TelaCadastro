import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHospitalDTO } from 'src/app/interface/IHospitalDTO';
import { HospitalService } from '../hospital-service.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-hospital',
  templateUrl: './list-hospital.component.html',
  styleUrls: ['./list-hospital.component.css']
})
export class ListHospitalComponent {

   listHospital: IHospitalDTO[] = [];

  constructor(private http: HttpClient, private getAllHospitalService: HospitalService,  private router: Router) {
    this.toList();
    this.getAllHospital();
  }

  toList() {
    this.listHospital = [];

    this.http
      .get('https://localhost:7114/GetAll')
      .pipe(
        map((response: any) => {
          return Object.values(response);
        })
      )
      .subscribe((data) => {
        for (let index = 0; index < data.length; index++) {
          let dataJson: any = data[index];


          this.listHospital.push(dataJson as IHospitalDTO);
        }

      });
  }

   getAllHospital(): void {
    this.getAllHospitalService.getAll().subscribe((hospital) => (this.listHospital = hospital));
  }

  delete(id: number) {
    console.log(`${this.listHospital} deletado com sucesso.`);
    this.http.delete(`https://localhost:7114/DeleteHospital/${id}`)
      .subscribe((data) => {
        console.log(`Linhas executadas no método de remover do banco ${JSON.stringify(data)}`);
        this.toList();
      });
  }

  edit(id: string) {
    this.router.navigate([`https://localhost:7144/Hospital/${id}`]);
  }

}
