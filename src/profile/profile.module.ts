import { Module } from "@nestjs/common";
import { StorageModule } from "../storage/storage.module.js";
import { ProfileRepository } from "./profile.repository.js";
import { ProfileResolver } from "./profile.resolver.js";

@Module({
    imports: [StorageModule],
    providers: [ProfileResolver, ProfileRepository],
})
export class ProfileModule {}
