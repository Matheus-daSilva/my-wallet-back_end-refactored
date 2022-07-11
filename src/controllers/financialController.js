import { postEvent } from "../repositories/financialRepository.js";
import { getFinancialEvent, getOneEvent, postFinancialEvent } from "../services/financialService.js";


export async function financialEvent(req, res) {
    const { value, type } = req.body;
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    postFinancialEvent(token, value, type)
    res.sendStatus(201);
}

  
export async function GetFinancialEvent(req, res) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    getFinancialEvent(token)
    res.send(events.rows);
}

export async function GetOneEvent(req, res) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    getOneEvent(token)
    const sum = events.rows.reduce(
      (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
      0
    );

    res.send({ sum });
}

  