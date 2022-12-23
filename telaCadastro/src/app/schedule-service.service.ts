import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IScheduleDTO } from './interface/IScheduleDTO';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  private apiURL = 'https://localhost:7114/Schedule';

  constructor(private http: HttpClient) { }

  // remove(settings: IScheduleSettingsDTO[], setting: IScheduleSettingsDTO){
  //   return settings.filter((s)=> setting.idConfig !== s.idConfig);
  // }

  getAll(): Observable<IScheduleDTO[]> { // observa se ocorre da maneira correta
    return this.http.get<IScheduleDTO[]>(this.apiURL);
  }

  // toList() {
  //   return this.http.get<any[]>(`${this.scheduleSettingsURL}`);
  // }

  getSetting(id: number) {
    return this.http.get(this.apiURL + `/Query/${id}`)
  }

  removeSetting(id: number) {
    const URL = `${this.apiURL}/${id}`;
    return this.http.delete(URL);
  }

  // createSetting(idConfig: number, idHospital: number, idSpecialty: number, idProfessional: number, startDateHour: Date, finalDateHour: Date){
  //   return this.http.post(this.apiURL, { idConfig, idHospital, idSpecialty,idProfessional, startDateHour, finalDateHour })
  // }

  createSetting(setting: any) {
    return this.http.post(this.apiURL, setting);
  }

  updateSetting(setting: any) {
    return this.http.put(this.apiURL, setting)
  }
}
