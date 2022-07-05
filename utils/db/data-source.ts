import { DataSource } from "typeorm";
import {Persona} from "./entity/Persona"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "erick",
  password: "Hola.1234",
  database: "erick",
  synchronize: true,
  logging: true,
  entities: [Persona],
  subscribers: [],
  migrations: [],
})