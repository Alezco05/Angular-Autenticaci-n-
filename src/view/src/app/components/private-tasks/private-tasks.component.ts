import { Component, OnInit } from '@angular/core';
import { TaksService } from 'src/app/services/taks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  tasks: any = [];
  // tslint:disable-next-line: no-inferrable-types
  token: string = '';
  constructor(private tasksService: TaksService) { }

  ngOnInit() {
    this.tasksService.getPrivateTasks().subscribe(resp => this.tasks = resp);
  }

}
