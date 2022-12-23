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
    return this.http.get(this.apiURL + `/Query/${id}`)
  }

  removeSetting(id: number){
    const URL = `${this.apiURL}/${id}`;
    return this.http.delete(URL);
  }

  createSetting(setting: any){
    return this.http.post(this.apiURL, setting);
  }

  updateSetting(setting: any){
    return this.http.put(this.apiURL, setting)
  }


}
