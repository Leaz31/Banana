import { Component } from '@angular/core';
import { ClientService, Client } from './client.service';
import { CleanerService, Cleaner } from './cleaner.service';
import { Skill, SkillService } from './skill.service';
import { TargetService, Target } from './target.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Banana';


  clients=[];

constructor(
  private clientService: ClientService,
  private cleanerService: CleanerService,
  private skillService: SkillService,
  private targetService: TargetService) 
  {
  this.cleanerService.getBack().subscribe(data => this.clients = data);
  this.showClient();
  this.showSkill();
  this.showTarget();
}
  
  private myUrl = 'http://localhost:4200/api/auth/client/listLight';
  private myUrl1 = 'http://localhost:4200/api/auth/cleaner/listLight';
  private myUrl2 = 'http://localhost:4200/api/auth/skill/list';
  private myUrl3 = 'http://localhost:4200/api/auth/target/listLight';  
  
  
  data : Client[] = [];
  data1 : Cleaner[] = [];
  data2: Skill [] = [];
  data3: Target [] = [];  
  
  public showClient(): void {
    this.clientService.getClient()
    .subscribe(res => this.data = res);
  }  
  public showSkill(): void {
    this.skillService.getSkill()
    .subscribe(res => this.data2 = res);
  }
  public showTarget(): void {
    this.targetService.getTarget()
    .subscribe(res => this.data3 = res);
  }
}