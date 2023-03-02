import "reflect-metadata";
import "./shared/container";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { postgresDataSource } from "./database";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

postgresDataSource.initialize()
    .then(()=> {
        console.log("Data Source has been initialized!")
    }).catch((err) => {
        console.error("Error during Data Source initialization", err)
    });



app.use(express.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${error.message}`,
    })
});

app.listen(3333, () => console.log("Server is running on port 3333!"));

