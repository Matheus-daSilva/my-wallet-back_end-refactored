import { Router } from "express";
import { SignIn, SignUp } from "../controllers/authController.js";

const authRouter = Router()

authRouter.post("/sign-up", SignUp);
authRouter.post("/sign-in", SignIn);

export default authRouter