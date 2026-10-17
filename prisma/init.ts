import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { createAdapter } from "../src/storage/storage.service.js";
import { experience, profile, projects, skills } from "./bio.js";

const prisma = new PrismaClient({ adapter: createAdapter() });

async function create() {
    await prisma.profile.deleteMany({});
    await prisma.profile.create({
        data: { key: 1, ...profile },
    });
    await prisma.skill.deleteMany({});
    for (const skill of skills) {
        await prisma.skill.create({ data: skill });
    }
    await prisma.experience.deleteMany({});
    for (const job of experience) {
        await prisma.experience.create({ data: job });
    }
    await prisma.project.deleteMany({});
    for (const project of projects) {
        await prisma.project.create({ data: project });
    }
}

create()
    .catch((error: unknown) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
