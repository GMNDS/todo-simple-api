import {db} from './connection'
import {todos} from './schema'

await db.delete(todos);

console.log("Seeding database...");
await db.insert(todos).values(
[
    {todo: "Learn Bun"},
    {todo: "Learn Drizzle"},
    {todo: "Learn Postgres"},
    {todo: "Learn TypeScript"},
    {todo: "Learn Elysiajs"},
]

)

console.log("Seeding complete!");
process.exit(0);