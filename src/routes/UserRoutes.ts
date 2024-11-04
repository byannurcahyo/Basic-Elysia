// import elysia
import { Elysia, t } from "elysia";

// import controller
import {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} from "../controllers/UserController";
import { Role } from "@prisma/client";

const UserRoutes = new Elysia({ prefix: "/users" })

    // route to get all users
    .get("/", async () => {
        return await getUsers(); // Pastikan untuk mengembalikan hasil
    })

    // route to create a user
    .post(
        "/",
        async ({ body }) => {
            return await createUser(
                body as {
                    name: string;
                    email: string;
                    password: string;
                    role: Role;
                }
            );
        },
        {
            body: t.Object({
                name: t.String({ minLength: 3, maxLength: 100 }),
                email: t.String({ minLength: 5, maxLength: 100 }),
                password: t.String({ minLength: 7, maxLength: 15 }),
                role: t.Enum(Role),
            }),
        }
    )

    // route to get user by id
    .get("/:id", async ({ params: { id } }) => {
        return await getUserById(id); // Pastikan untuk mengembalikan hasil
    })

    // route to update a user
    .patch(
        "/:id",
        async ({ params: { id }, body }) => {
            return await updateUser(
                id,
                body as {
                    name?: string;
                    email?: string;
                    password?: string;
                    role?: Role;
                }
            );
        },
        {
            body: t.Object({
                name: t.Optional(t.String({ minLength: 3, maxLength: 100 })), // Gunakan t.Optional
                email: t.Optional(t.String({ minLength: 5, maxLength: 100 })), // Gunakan t.Optional
                password: t.Optional(t.String({ minLength: 7, maxLength: 15 })), // Gunakan t.Optional
                role: t.Optional(t.Enum(Role)), // Gunakan t.Optional
            }),
        }
    )

    // route to delete a user
    .delete("/:id", async ({ params: { id } }) => {
        return await deleteUser(id); // Pastikan untuk mengembalikan hasil
    });

export default UserRoutes;