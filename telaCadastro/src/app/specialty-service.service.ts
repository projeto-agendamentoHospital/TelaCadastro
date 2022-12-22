import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ISpecialtyDTO } from './interface/ISpecialtyDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  private apiURL = 'https://localhost:7114/CreateSpecialty';

  constructor(private http: HttpClient) { }

  registerSpecilty(especialty: any){
    return this.http.post(this.apiURL, especialty);
  }


  getAll(): Observable<ISpecialtyDTO[]> {
    return this.http.get<ISpecialtyDTO[]>("https://localhost:7114/GetList");
  }

  updateSetting(specialty: any){
    return this.http.put(this.apiURL, specialty)
  }

}
