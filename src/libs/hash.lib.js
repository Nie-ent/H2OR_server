import argon2 from "argon2";

export async function hashString(str) {
    return await argon2.hash(str, {
        type: argon2.argon2id,
        memoryCost: 4096,
        timeCost: 3,
        parallelism: 1
    });
}

export async function compareHash(hash, str) {
    return await argon2.verify(hash, str)
}
