import { todoRepository } from "../repositories/todoRepository";
import {Elysia, t} from 'elysia';

const todoSchema = t.Object({
    todo: t.String(),
    isCompleted: t.Optional(t.Boolean())
})

export const todoController = new Elysia()
    .post('/todos', async ({body, set, error}) => {
        try {
            const {todo} = body;
            if (!todo || todo.trim() === "") {
                set.status = 400;
                return {error: "todo is required"}
            }

            const createdTodo = await todoRepository.create(todo);
            set.status = 201;
            return {createdTodo};
        }catch(Error) {
            set.status = 500;
            return {error}
        }
    },
{
    body: todoSchema
})
    .get('/todos', async ({set, error}) => {
        try {
            const todos = await todoRepository.getAll();
            return todos;
        }catch(e) {
            set.status = 500;
            return {error: error}
        }
    })
    .get('/todos/:id', async ({params, set}) => {
        try {
            const {id} = params;
            const todo = await todoRepository.getById(id);
            if (!todo) {
                set.status = 404;
                return {error: "todo not found"}
            }
            return todo;
        }catch(error) {
            set.status = 500;
            return {error}
        }
    })
    .put('/todos/:id', async ({params, body, set}) => {
        try {
            const {id} = params;
            const {todo, isCompleted} = body;
            if (!todo || todo.trim() === "") {
                set.status = 400;
                return {error: "todo is required"}
            }
            const updatedTodo = await todoRepository.update(id, todo, isCompleted);
            if (!updatedTodo) {
                set.status = 404;
                return {error: "todo not found"}
            }
            return {updatedTodo};
        }catch(error) {
            set.status = 500;
            return {error}
        }
    },
    {
        body: todoSchema
    })
    .patch('/todos/:id', async ({params, body, set}) => {
        try {
            const {id} = params;
            const {todo, isCompleted} = body;
            const updatedTodo = await todoRepository.update(id, todo, isCompleted);
            if (!updatedTodo) {
                set.status = 404;
                return {error: "todo not found"}
            }
            return updatedTodo;
        }catch(error) {
            set.status = 500;
            return {error}
        }
    },
    {
        body: todoSchema
    })
    .delete('/todos/:id', async ({params, set}) => {
        try {
            const {id} = params;
            const todo = await todoRepository.getById(id);
            if (!todo) {
                set.status = 404;
                return {error: "todo not found"}
            }
            await todoRepository.delete(id);
            set.status = 204;
        }catch(error) {
            set.status = 500;
            return {error}
        }
    })

