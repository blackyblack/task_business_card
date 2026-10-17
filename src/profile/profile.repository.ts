import { Injectable } from "@nestjs/common";
import { StorageService } from "../storage/storage.service.js";

@Injectable()
export class ProfileRepository {
    constructor(private readonly storage: StorageService) {}

    profile() {
        return this.storage.profile.findUnique({
            where: { key: 1 },
            select: {
                name: true,
                description: true,
                githubUrl: true,
                linkedinUrl: true,
            },
        });
    }

    skills() {
        return this.storage.skill.findMany({
            orderBy: [{ name: "asc" }, { id: "asc" }],
        });
    }

    experience() {
        return this.storage.experience.findMany({
            orderBy: [{ startDate: "desc" }, { id: "asc" }],
        });
    }

    projects() {
        return this.storage.project.findMany({
            orderBy: [{ name: "asc" }, { id: "asc" }],
        });
    }
}
