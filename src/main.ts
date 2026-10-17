import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

async function main() {
    const port = Number(process.env.PORT ?? 3000);
    const app = await NestFactory.create(AppModule);
    app.enableShutdownHooks();
    await app.listen(port, "0.0.0.0");
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
});
