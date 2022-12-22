import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss']
})
export class TaskTrackerComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: Task[] = [];


  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService
      .deleteTask(task)
      .subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
