import Todo from './todo.model';
import ITodo from './todo.interface';
import CreateTodoDto from './dto/create-todo.dto';
import UpdateTodoDto from './dto/update-todo.dto';

class TodoService {
  async getAll(userId: ITodo['userId']) {
    const todos = await Todo.find({ userId });
    return todos;
  }

  async create(dto: CreateTodoDto) {
    const newTodo = await Todo.create(dto);
    return newTodo;
  }

  async update(dto: UpdateTodoDto) {
    const updatedTodo = await Todo.findByIdAndUpdate(dto._id, dto, {
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
