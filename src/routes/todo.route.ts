import { Router } from "express";
import { TodoService } from "../services/todo.service";

const router = Router();
const todoService = new TodoService();

router.get("/api/todos", async (req, res) => {
  const todos = await todoService.getAll();

  res.json({ success: true, data: todos });
});

router.get("/api/todos/:id", async (req, res) => {
  const todo = await todoService.get(req.params.id);

  if (!todo) {
    res.status(404).json({
      success: false,
      data: "Todo not found",
    });
  }

  res.json({ success: true, data: todo });
});

router.post("/api/todos", async (req, res) => {
  const { name } = req.body;
  const todo = await todoService.create(name);

  res.status(201).json({ success: true, data: todo });
});

router.put("/api/todos/:id", async (req, res) => {
  const todo = await todoService.get(req.params.id);

  if (!todo) {
    res.status(404).json({
      success: false,
      data: "Todo not found",
    });
  }

  todoService.update(req.params.id, req.body);

  res.json({ success: true });
});

router.delete("/api/todos/:id", async (req, res) => {
  const todo = await todoService.get(req.params.id);

  if (!todo) {
    res.status(404).json({
      success: false,
      data: "Todo not found",
    });
  }

  todoService.delete(req.params.id);

  res.json({ success: true, data: todo });
});

export default router;
