import { Injectable } from '@nestjs/common';
import { Todo } from '@happyorg/data';

@Injectable()
export class AppService {
  todos: Todo[] = [];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
