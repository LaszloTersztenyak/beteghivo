import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SzobaController } from '../model/szoba-controller';

@Injectable({
  providedIn: 'root',
})
export class SzobaService {
  apiURL: string = environment.apiUrl;

  rooms: string = 'szobak';

  constructor(private http: HttpClient) {}

  getAll(): Observable<SzobaController[]> {
    return this.http.get<SzobaController[]>(`${this.apiURL}${this.rooms}`);
  }
}
