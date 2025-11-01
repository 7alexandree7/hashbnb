import { Router } from "express";

import loginRoutes from "./user/login/login.js";
import registerRoutes from "./user/register/register.js";
import getUsersRoutes from "./user/getUsers/getUsers.js";
import profileAuthRoutes from "./user/profile/profile.js";
import logoutRoutes from "./user/logout/logout.js";

const router = Router();

router.use("/users/login", loginRoutes);
router.use("/users/register", registerRoutes);
router.use('/users', getUsersRoutes);
router.use("/users/profile", profileAuthRoutes);
router.use("/users/logout", logoutRoutes);

export default router;