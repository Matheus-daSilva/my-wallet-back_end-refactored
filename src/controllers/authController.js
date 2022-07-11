import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { signIn, signUp } from "../services/authService.js";

dotenv.config();

export async function SignUp(req, res){
        const { name, email, password } = req.body;
        console.log(name, email, password)
        await signUp(name, email, password)
        res.sendStatus(201);
}

export async function SignIn(req, res) {
    const { email, password } = req.body;

    await signIn(email, password)
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.send({
      token,
    });
}