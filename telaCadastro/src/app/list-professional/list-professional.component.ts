import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMedicoDTO } from '../interface/IMedicoDTO';
import { ScheduleProfessionalService } from '../schedule-professional-service.service';
@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.css']
})
export class ListProfessionalComponent {
  listScheduleProfessional: IMedicoDTO[] = [];

  constructor(private http: HttpClient, private scheduleProfessionalService: ScheduleProfessionalService) {
    this.toList();
    this.getProfessional();
  }

  toList() {
    this.http.get('https://localhost:7114/ScheduleProfessionalRegistration').subscribe((data) => { console.log(`Chamada da API retornou: ${JSON.stringify(data)}`) });
    // var fullDate = JSON.stringify(d);
  }

  getProfessional(): void {
    this.scheduleProfessionalService.getAll().subscribe((professional) => (this.listScheduleProfessional = professional));
  }
}
