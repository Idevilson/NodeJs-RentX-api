import { DataSource } from "typeorm";

const postgresDataSource = new DataSource({
    type: "postgres",
    host: "172.23.0.2",
    port:  5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    migrations: ["./src/database/migrations/*.ts"]
});


export { postgresDataSource };