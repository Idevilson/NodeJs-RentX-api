import { DataSource } from "typeorm";

const postgresDataSource = new DataSource({
    type: "postgres",
    host: "172.28.0.2",
    port:  5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    entities: [
        "./src/modules/cars/entities/*.ts",
        "./src/modules/accounts/entities/*.ts",

    ],
    migrations: ["./src/database/migrations/*.ts"]
});


export { postgresDataSource };