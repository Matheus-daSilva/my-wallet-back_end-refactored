import bcrypt from "bcrypt";
import { getUser, insertUser } from "../repositories/authRepository.js";


export async function signUp(name, email, password) {
    if (!name || !email || !password) {
        throw { type: "missing", message: "please, verify your inputs" };
        //return res.sendStatus(422);
    }

    const existingUsers = await getUser(email)

    if (existingUsers.rowCount > 0) {
        throw { type: "true_user", message: "this user has already existis" }
        //return res.sendStatus(409);
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    insertUser(name, email, hashedPassword);
}

export async function signIn(email, password) {
    if (!email || !password) {
        throw { type: "missing", message: "please, verify your inputs" };
        // return res.sendStatus(422);
    }

    const { rows } = await getUser(email)
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw { type: "unauthorized", message: "please, verify your inputs" };
        //return res.sendStatus(401);
    }
}