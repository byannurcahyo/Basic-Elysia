//import prisma client
import prisma from "../../prisma/client";

/**
 * Getting all identity
 */
export async function getIdentities() {
    try {
        //get all identity
        const identities = await prisma.identity.findMany({
            orderBy: { id: "asc" },
        });

        //return response json
        return {
            success: true,
            message: "List Data Idendtity!",
            data: identities,
        };
    } catch (e: unknown) {
        console.error(`Error getting identity: ${e}`);
    }
}

/**
 * Creating a identity
 */
export async function createIdentity(options: { name: string }) {
    try {
        const identities = await prisma.identity.create({
            data: {
                name: options.name,
            },
        });
        return {
            success: true,
            message: "User Created Successfully!",
            data: identities,
        };
    } catch (e: unknown) {
        console.error(`Error creating user: ${e}`);
    }
}

/**
 * Getting a identity by ID
 */
export async function getIdentityById(id: string) {
    try {
        const identityId = parseInt(id);
        const identities = await prisma.identity.findUnique({
            where: { id: identityId },
        });

        if (!identities) {
            return {
                success: false,
                message: "User Not Found!",
                data: null,
            };
        }

        return {
            success: true,
            message: `User Details for ID: ${id}`,
            data: identities,
        };
    } catch (e: unknown) {
        console.error(`Error getting user: ${e}`);
        return { success: false, message: "Internal Server Error" };
    }
}

/**
 * Updating a user
 */
export async function updateIdentity(
    id: string,
    options: {
        name?: string;
    }
) {
    try {
        const identityId = parseInt(id);
        const { name } = options;

        const identities = await prisma.identity.update({
            where: { id: identityId },
            data: {
                ...(name ? { name } : {}),
            },
        });

        return {
            success: true,
            message: "User Updated Successfully!",
            data: identities,
        };
    } catch (e: unknown) {
        console.error(`Error updating user: ${e}`);
    }
}

/**
 * Deleting a user
 */
export async function deleteIdentity(id: string) {
    try {
        const identityId = parseInt(id);
        await prisma.identity.delete({ where: { id: identityId } });

        return {
            success: true,
            message: "User Deleted Successfully!",
        };
    } catch (e: unknown) {
        console.error(`Error deleting user: ${e}`);
    }
}
