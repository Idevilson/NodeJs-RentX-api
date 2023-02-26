import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

import { postgresDataSource } from "./database";

postgresDataSource.initialize()
    .then(()=> {
        console.log("Data Source has been initialized!")
    }).catch((err) => {
        console.error("Error during Data Source initialization", err)
    });



app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log("Server is running on port 3333!"));

