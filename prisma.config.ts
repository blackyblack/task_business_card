import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        seed: "node dist/prisma/init.js",
    },
    datasource: {
        url: process.env.DATABASE_URL,
    },
});
