import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IMedicoDTO } from './interface/IMedicoDTO';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ScheduleProfessionalService {
  private apiURL = 'https://localhost:7114/ScheduleProfessionalRegistration';

  constructor(private http: HttpClient) { }



  getAll(): Observable<IMedicoDTO[]> { // observa se ocorre da maneira correta
    return this.http.get<IMedicoDTO[]>(this.apiURL);
  }



  getProfessional(id: number){
    return this.http.get(this.apiURL + `/GetProfessionalRegistrationById/${id}`)
  }

  removeProfessional(id: number){
    const URL = `${this.apiURL}`+`/DeleteProfessionalRegistration/${id}`;
    return this.http.delete(URL);
  }

  createProfessional(professional: any){
    return this.http.post(`${this.apiURL}/CreateProfessionalRegistration`, professional);
  }

  updateProfessional(professional: any){
    return this.http.put(this.apiURL + `/UpdateProfessionalRegistration/`, professional)
  }
}
