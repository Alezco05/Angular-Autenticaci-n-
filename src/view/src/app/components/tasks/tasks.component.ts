import { Component, OnInit } from '@angular/core';
import { TaksService } from 'src/app/services/taks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [];
  constructor(private tasksService: TaksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(resp => this.tasks = resp);
  }
}
