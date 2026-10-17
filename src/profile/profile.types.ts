import { Field, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Skill {
    @Field(() => ID)
    id!: string;

    @Field()
    name!: string;
}

@ObjectType()
export class Experience {
    @Field(() => ID)
    id!: string;

    @Field()
    company!: string;

    @Field()
    position!: string;

    @Field(() => GraphQLISODateTime)
    startDate!: Date;

    @Field(() => GraphQLISODateTime, { nullable: true })
    endDate!: Date | null;

    @Field(() => [String])
    achievements!: string[];
}

@ObjectType()
export class Project {
    @Field(() => ID)
    id!: string;

    @Field()
    name!: string;

    @Field()
    url!: string;
}

@ObjectType()
export class Profile {
    @Field()
    name!: string;

    @Field()
    description!: string;

    @Field()
    githubUrl!: string;

    @Field(() => String, { nullable: true })
    linkedinUrl!: string | null;
}
