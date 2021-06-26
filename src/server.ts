/**
 * GET    => Buscar uma informação
 * POST   => Inserir (criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de Parâmetros
 * Routes Params => http://localhost:3000/produtos/123456789
 * Query Params  => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * Body Params   => {
 * 	"name": "teclado",
 * 	"description": "teclado bom"
 * }
 */
import "reflect-metadata";
import express, { Request, Response, NextFunction, response } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database"

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof Error) {
		return response.status(400).json({
			error: err.message
		})
	}

	return response.status(500).json({
		status: "error",
		message: "Internal Server Error"
	})
});

app.listen(3000, () => console.log("Server is running"));