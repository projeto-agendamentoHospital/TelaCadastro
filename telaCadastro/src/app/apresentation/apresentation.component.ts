import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css']
})
export class ApresentationComponent {
  titleApresentation: string = "Agendamento";
  titleHeader: string = "Agende sua Consulta";
  descriptionApresentation: string = "Preencha corretamente os campos abaixo para agendar sua consulta.";
}
