import type { Prisma } from "../src/generated/prisma/client.js";

export const profile: Prisma.ProfileCreateInput = {
    name: "Andrew",
    description: "My profile",
    githubUrl: "https://github.com/blackyblack",
    linkedinUrl: null,
};

export const skills: Prisma.SkillCreateManyInput[] = [
    { id: "skill1", name: "Skill" },
];

export const experience: Prisma.ExperienceCreateManyInput[] = [
    {
        id: "1",
        company: "Company",
        position: "Position",
        startDate: "2026-01-01",
        endDate: null,
        achievements: ["Achievement"],
    },
];

export const projects: Prisma.ProjectCreateManyInput[] = [
    {
        id: "1",
        name: "Project",
        url: "https://github.com/blackyblack/task_business_card",
    },
];
