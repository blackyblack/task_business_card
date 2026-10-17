import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { DEFAULT_DATABASE_URL } from "./database.config.js";

export function createAdapter() {
    const connectionString = process.env.DATABASE_URL ?? DEFAULT_DATABASE_URL;
    return new PrismaPg({ connectionString });
}

@Injectable()
export class StorageService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    constructor() {
        super({ adapter: createAdapter() });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
