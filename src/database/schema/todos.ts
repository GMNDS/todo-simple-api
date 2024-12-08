import {v7} from 'uuid'
import {pgTable, text, boolean, timestamp} from 'drizzle-orm/pg-core'

export const todos = pgTable("todos",{
    id: text("id").$defaultFn( () => v7()).primaryKey(),
    todo: text("todo").notNull(),
    isCompleted: boolean("is_completed").default(false),
    createdAt: timestamp("created_at").notNull().defaultNow()
})