import { IBeneficiarioDto } from './interface/IBeneficiarioDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IScheduleSettingsDTO } from './interface/IScheduleSettingsDTO';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioCadastroService {
  private apiURL = 'https://localhost:7114/CreateBeneficiary';
  constructor(private http: HttpClient) { }

  getAll(): Observable<IBeneficiarioDto[]> { // observa se ocorre da maneira correta
    return this.http.get<IBeneficiarioDto[]>("https://localhost:7114/Beneficiary");
  }

  getSetting(id: number){
    return this.http.get('https://localhost:7114/' + `/GetById/${id}`)
  }

  updateSetting(id: number){
    return this.http.get('https://localhost:7114/' + `/UpdateBeneficiary/${id}`)
  }

  removeSetting(id: number){
    const URL = `https://localhost:7114/DeleteBeneficiary/${id}`;
    return this.http.delete(URL);
  }

  createSetting(setting: any){
    return this.http.post(this.apiURL, setting);
  }

 


}
