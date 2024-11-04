// import elysia
import { Elysia, t } from "elysia";

//import controller
import {
    getIdentities,
    createIdentity,
    getIdentityById,
    updateIdentity,
    deleteIdentity,
} from "../controllers/IdentityController";

const IdentityRoutes = new Elysia({ prefix: "/identities" })

    //route get all posts
    .get("/", () => getIdentities())

    // route to create a user
    .post(
        "/",
        async ({ body }) => {
            return await createIdentity(
                body as {
                    name: string;
                }
            );
        },
        {
            body: t.Object({
                name: t.String({ minLength: 3, maxLength: 100 }),
            }),
        }
    )

    // route to get user by id
    .get("/:id", async ({ params: { id } }) => {
        return await getIdentityById(id); // Pastikan untuk mengembalikan hasil
    })

    // route to update a user
    .patch(
        "/:id",
        async ({ params: { id }, body }) => {
            return await updateIdentity(
                id,
                body as {
                    name?: string;
                }
            );
        },
        {
            body: t.Object({
                name: t.Optional(t.String({ minLength: 3, maxLength: 100 })), // Gunakan t.Optional
            }),
        }
    )

    // route to delete a user
    .delete("/:id", async ({ params: { id } }) => {
        return await deleteIdentity(id); // Pastikan untuk mengembalikan hasil
    });

export default IdentityRoutes;
