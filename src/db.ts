import { DataSource } from "typeorm";
import { Todo } from "./entities/todo.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "todo",
  entities: [Todo],
});
