import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Skill {
  id:number;
  skillName:string;
}

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9999/skill/list');
  }
}
