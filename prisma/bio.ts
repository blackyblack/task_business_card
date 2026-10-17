import type { Prisma } from "../src/generated/prisma/client.js";

export const profile: Prisma.ProfileCreateInput = {
    name: "Andrew Lekar",
    description:
        "Software developer and project manager with experience in blockchain, finance, and electronics. I build services and applications, review smart contract security, and lead development teams.",
    githubUrl: "https://github.com/blackyblack",
    linkedinUrl: "https://www.linkedin.com/in/andrew-lekar-4080406a",
};

export const skills: Prisma.SkillCreateManyInput[] = [
    { id: "python", name: "Python" },
    { id: "rust", name: "Rust" },
    { id: "typescript", name: "TypeScript" },
];

export const experience: Prisma.ExperienceCreateManyInput[] = [
    {
        id: "gifthorse",
        company: "GiftHorse",
        position: "Senior Software Engineer / Team Lead",
        startDate: new Date("2025-01-01T00:00:00Z"),
        endDate: null,
        achievements: [
            "Maintain and refactor the TON blockchain interaction service in TypeScript and Node.js.",
            "Audit and refactor TON smart contracts.",
            "Write technical requirements and review code across projects.",
        ],
    },
    {
        id: "primex",
        company: "Primex Labs",
        position: "Senior Software Engineer",
        startDate: new Date("2021-01-01T00:00:00Z"),
        endDate: new Date("2025-01-01T00:00:00Z"),
        achievements: [
            "Built, deployed, and managed Keeper, a Rust application for blockchain tasks.",
            "Reviewed and audited Solidity smart contracts and improved their tests.",
            "Built Python trading bots to test infrastructure performance and load.",
        ],
    },
    {
        id: "adoriasoft",
        company: "Adoriasoft",
        position: "Senior Software Engineer",
        startDate: new Date("2019-01-01T00:00:00Z"),
        endDate: new Date("2021-01-01T00:00:00Z"),
        achievements: [
            "Implemented a C++ proof-of-proof protocol to store blockchain snapshots on another blockchain.",
            "Forked NXT and Bitcoin to add proof-of-proof security.",
            "Won a bounty in a TON blockchain contest.",
        ],
    },
];

export const projects: Prisma.ProjectCreateManyInput[] = [
    {
        id: "maxrs",
        name: "maxrs",
        url: "https://github.com/blackyblack/maxrs",
    },
    {
        id: "symplyphysics",
        name: "Symplyphysics",
        url: "https://symplyphysics.github.io",
    },
    {
        id: "laundromat",
        name: "Laundromat",
        url: "https://laundromat-site.github.io/",
    },
];
