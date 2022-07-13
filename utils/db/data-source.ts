import { DataSource } from "typeorm";
import {Persona} from "./entity/Persona"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) ,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Persona],
  subscribers: [],
  migrations: [],
})