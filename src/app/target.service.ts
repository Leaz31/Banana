import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Target {
  id:number;
  name:string;
}

@Injectable({
  providedIn: 'root'
})

export class TargetService {

  constructor(private http: HttpClient) { }

  public getTarget(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9999/target/listLight');
  }
}
