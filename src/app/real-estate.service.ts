import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  private apiUrl = 'http://127.0.0.1:8000/api/real-estates';

  constructor(private http: HttpClient) { }

  getRealEstates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
