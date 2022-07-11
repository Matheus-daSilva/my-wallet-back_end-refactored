
export async function errorHandler(error, req, res, next) {
	if (error.type === "missing") return res.sendStatus(422);
	if (error.type === "unauthorized") return res.sendStatus(401);
    if (error.type === "true_user") return res.sendStatus(409);

	return res.sendStatus(500);
}