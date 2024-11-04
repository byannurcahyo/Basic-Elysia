// import elysia
import { Elysia } from "elysia";

// import routes
import PostRoutes from "./PostRoutes"; // Pastikan path benar
import UserRoutes from "./UserRoutes"; // Pastikan path benar
import IdentityRoutes from "./IdentityRoutes"; // Pastikan path benar

const Routes = new Elysia().use(PostRoutes).use(UserRoutes).use(IdentityRoutes);

// Export Routes sebagai default
export default Routes;
