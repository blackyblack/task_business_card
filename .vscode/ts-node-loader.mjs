import { resolve as resolveTypeScript } from "ts-node/esm";

export { load } from "ts-node/esm";

// Workaround for NestJS’s ESM exports
export async function resolve(specifier, context, nextResolve) {
    try {
        return await nextResolve(specifier, context);
    } catch (error) {
        if (error.code !== "ERR_MODULE_NOT_FOUND") {
            throw error;
        }
        return resolveTypeScript(specifier, context, nextResolve);
    }
}
