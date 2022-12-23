import { Component } from '@angular/core';
import { ISpecialtyDTO } from 'src/app/interface/ISpecialtyDTO';
import { HttpClient } from '@angular/common/http';
import { SpecialtyService } from '../specialty-service.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-specialty',
  templateUrl: './list-specialty.component.html',
  styleUrls: ['./list-specialty.component.css'],
})
export class ListSpecialtyComponent {
  listingAllSpecialty: ISpecialtyDTO[] = [];
  constructor(
    private http: HttpClient,
    private getAllSpecialtyService: SpecialtyService,
    private router: Router
  ) {
    this.toList();
    this.getAllSpecialty();
  }
  toList() {
    this.listingAllSpecialty = [];
    this.http
      .get('https://localhost:7114/GetList')
      .pipe(
        map((response: any) => {
          return Object.values(response);
        })
      )
      .subscribe((data) => {
        for (let index = 0; index < data.length; index++) {
          let dataJson: any = data[index];
          this.listingAllSpecialty.push(dataJson as ISpecialtyDTO);
        }
        console.log(this.listingAllSpecialty);
      });
  }
  getAllSpecialty(): void {
    this.getAllSpecialtyService
      .getAll()
      .subscribe((specialty) => (this.listingAllSpecialty = specialty));
  }
  delete(id: number) {
    this.http
      .delete(`https://localhost:7114/DeleteSpecialty/id=${id}`)
      .subscribe((data) => {
        console.log(
          `Linhas executadas no método de remover do banco ${JSON.stringify(
            data
          )}`
        );
        this.toList();
      });
  } // edit(id: number) {   //   this.router.navigate([`editarAluno/${id}`]);   // }
}
