import Todo from './todo.model';
import ITodo from './todo.interface';

class TodoService {
  async getAll() {
    const todos = await Todo.find();
    return todos;
  }

  async create(todo: ITodo) {
    const newTodo = await Todo.create(todo);
    return newTodo;
  }

  update() {}

  delete() {}
}

export default new TodoService();
