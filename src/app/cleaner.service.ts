import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Cleaner {
  id:number;
  pseudo:string;
}

@Injectable({
  providedIn: 'root'
})
export class CleanerService {

  constructor(private http: HttpClient) { }

  public getBack(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9999/cleaner/listLight');
  }
}
