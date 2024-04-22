import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalsItemDto } from '../models/rentals-item-dto';

@Injectable({
  providedIn: 'root'
})
export class RentalApiService {

  constructor(private http: HttpClient) { }

  getList(): Observable<RentalsItemDto[]> {
    return this.http.get<RentalsItemDto[]>
      ('http://localhost:3000/rentals')
  }

}
