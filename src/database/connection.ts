import * as schema from "./schema";
import {drizzle} from 'drizzle-orm/node-postgres'

const databaseUrl = (): string => {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error("DATABASE_URL env var is required")
    }
    return databaseUrl;

}

export const db = drizzle(databaseUrl(), {schema})