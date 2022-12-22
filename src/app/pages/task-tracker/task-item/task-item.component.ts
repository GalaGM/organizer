import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
}
