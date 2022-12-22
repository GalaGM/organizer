import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;

  faPlusSquare = faPlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newTask: Task = {
      text: this.text,
      date: this.day
    }
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
  }
}
