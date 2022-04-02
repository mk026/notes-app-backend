import Todo from './todo.model';

class TodoService {
  async getAll() {
    const todos = await Todo.find();
    return todos;
  }

  create() {}

  update() {}

  delete() {}
}

export default new TodoService();
