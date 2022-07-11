import { Router } from "express";
import app from "../app.js";
import { financialEvent, GetFinancialEvent } from "../controllers/financialController.js";

const financialRouter = Router();

app.post("/financial-events", financialEvent)
app.get("/financial-events", GetFinancialEvent)
app.get("/financial-events/sum")

export default financialRouter