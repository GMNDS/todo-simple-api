import {Elysia} from 'elysia';
import { swagger } from "@elysiajs/swagger";
import {todoController} from './controllers/todoController';


const app = new Elysia()
    .use(swagger({
        documentation: {
            info: {
                title: "Todo API",
                description: "A simple todo API for learnng Elysiajs",
                version: "0.1.0"
            }
        }
    }))
    .use(todoController)
    .listen(3021, () => {
        console.log("Server is running on port 3021")
    })