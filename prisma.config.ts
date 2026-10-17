import "dotenv/config";
import { defineConfig } from "prisma/config";
import { DEFAULT_DATABASE_URL } from "./src/storage/database.config.js";

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        seed: "node dist/prisma/init.js",
    },
    datasource: {
        url: process.env.DATABASE_URL ?? DEFAULT_DATABASE_URL,
    },
});
