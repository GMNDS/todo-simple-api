import { eq } from 'drizzle-orm';
import {db} from '../database/connection';
import {todos} from '../database/schema';

export const todoRepository = {
    async create(todo: string) {
        if (!todo || todo.trim() === "") {
            throw new Error("todo is required")
        }

        return await db.insert(todos).values({todo}).returning();
    },

    async getAll() {
        return await db.select().from(todos)
    },

    async getById(id: string) {
        return await db.select().from(todos).where(eq(todos.id, id))
    },

    async update(id: string, todo?: string, isCompleted?: boolean) {

        if (!todo && isCompleted === undefined) {
            throw new Error("todo or isCompleted is required")
        }
        if (todo && todo.trim() === "") {
            throw new Error("todo cannot be empty")
        }
        if (isCompleted === undefined) {
            return await db.update(todos).set({todo}).where(eq(todos.id, id)).returning()
        }
        if (todo === undefined) {
            return await db.update(todos).set({isCompleted}).where(eq(todos.id, id)).returning()
        }
        
        return await db.update(todos).set({todo, isCompleted}).where(eq(todos.id, id)).returning()
    },

    async delete(id: string) {
        const todo = await this.getById(id)
        if (!todo) {
            throw new Error("todo not found")
        }
        return await db.delete(todos).where(eq(todos.id, id))
    }
}