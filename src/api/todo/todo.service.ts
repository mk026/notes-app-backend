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

  async update(todo: ITodo) {
    const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, {
      new: true,
    });
    return updatedTodo;
  }

  delete() {}
}

export default new TodoService();
