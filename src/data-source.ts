import { DataSource } from "typeorm";

require("dotenv").config();

export const appDataSource = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,

    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,
    // entities: [User],
    migrations: ["src/migrations/*.ts"]
})

appDataSource.initialize()
.then(()=>{console.log("Data Source Initialized")})
.catch((err)=>{
    console.error("Error during Data Source Initialization", err)
})