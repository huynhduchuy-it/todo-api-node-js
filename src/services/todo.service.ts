import { AppDataSource } from "../db";
import { Todo } from "../entities/todo.entity";
import { v1 as uuid } from "uuid";

const todoRepository = AppDataSource.getRepository(Todo);

export class TodoService {
  async getAll() {
    return await todoRepository.find();
  }

  async get(id: string) {
    return await todoRepository.findOneBy({ id: id });
  }

  async create(name: string) {
    const todo = new Todo();
    todo.id = uuid();
    todo.name = name;
    todo.completed = false;

    return await todoRepository.save(todo);
  }

  async update(id: string, todo: Todo) {
    return await todoRepository.update(id, todo);
  }

  async delete(id: string) {
    return await todoRepository.delete(id);
  }
}
