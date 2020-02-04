import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Client {
  id:number;
  name:string;
}

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http: HttpClient) { }

  public getClient(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9999/client/listLight');
  }
}
