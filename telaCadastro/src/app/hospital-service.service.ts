import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IHospitalDTO } from './interface/IHospitalDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiURL = 'https://localhost:7114/CreateHospital';

  constructor(private http: HttpClient) { }

  registerHospital(hospital: any){
    return this.http.post(this.apiURL, hospital);
  }


  getAll(): Observable<IHospitalDTO[]> {
    return this.http.get<IHospitalDTO[]>("https://localhost:7114/GetAll");
  }

  updateSetting(hospital: any){
    return this.http.put(this.apiURL, hospital)
  }

}
