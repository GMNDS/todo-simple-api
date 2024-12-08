import {defineConfig} from 'drizzle-kit'

const databaseUrl = (): string => {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error("DATABASE_URL env var is required")
    }
    return databaseUrl;

}

export default defineConfig({
    out: "./drizzle",
    schema: "./src/models/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: databaseUrl(),
    }
})