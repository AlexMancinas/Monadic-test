import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../../infrastructure/services/todo.service';
import { Todo } from '../../../models/todo';


@Component({
  selector: 'onboarding-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todoInput?: Todo;

  completed = false;
  todo?: Todo;

  constructor(
     private todoService: TodoService
  ) { }

  ngOnInit(): void {
    console.log('hi mom');
  }

  onChange() {
    console.log("changed");
    this.completed = !this.completed;
  }

  onCliCk(e:any) {
    console.log("Clicked");
    console.log(e);
  }




}
