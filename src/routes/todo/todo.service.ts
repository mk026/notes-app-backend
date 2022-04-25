import Todo from './todo.model';
import ITodo from './todo.interface';

class TodoService {
  async getAll(userId: ITodo['userId']) {
    const todos = await Todo.find({ userId });
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

  async delete(id: ITodo['_id']) {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return deletedTodo;
  }
}

export default new TodoService();
