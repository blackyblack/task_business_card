import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ProfileRepository } from "./profile.repository.js";
import { Experience, Profile, Project, Skill } from "./profile.types.js";

@Resolver(() => Profile)
export class ProfileResolver {
    constructor(private readonly repository: ProfileRepository) {}

    @Query(() => Profile, { nullable: true })
    profile() {
        return this.repository.profile();
    }

    @ResolveField(() => [Skill])
    skills() {
        return this.repository.skills();
    }

    @ResolveField(() => [Experience])
    experience() {
        return this.repository.experience();
    }

    @ResolveField(() => [Project])
    projects() {
        return this.repository.projects();
    }
}
