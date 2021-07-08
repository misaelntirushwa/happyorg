import { Component, Input } from '@angular/core';
import { Todo } from '@happyorg/data';

@Component({
  selector: 'happyorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Input() todos: Todo[] = [];

  
}
