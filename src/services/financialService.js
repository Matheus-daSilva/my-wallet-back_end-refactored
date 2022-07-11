import { getEvent, getUserEvent, postEvent } from "../repositories/financialRepository.js";
import jwt from "jsonwebtoken";


export async function postFinancialEvent(token, value, type) {
    let user;
    user = jwt.verify(token, process.env.JWT_SECRET);

    if (!user) throw { type: "unauthorized", message: "please, verify your inputs" };

    if (!value || !type) throw { type: "missing", message: "please, verify your inputs" };

    const financialTypes = ["INCOME", "OUTCOME"];

    if (!financialTypes.includes(type)) throw { type: "unauthorized", message: "please, verify your inputs" };

    if (value < 0) throw { type: "unauthorized", message: "please, verify your inputs" };
    postEvent(user.id, value, type)
}

export async function getFinancialEvent(token) {
    let user;
    user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) throw { type: "unauthorized", message: "please, verify your inputs" };
    getEvent(user.id)
}

export async function getOneEvent(token) {
    let user;
    user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) throw { type: "unauthorized", message: "please, verify your inputs" };
    getUserEvent(user.id)
}
