import { DataSource, DataSourceOptions } from "typeorm";
import {Persona} from "./entity/Persona"
import {UserEntity, AccountEntity, SessionEntity, VerificationTokenEntity } from './entity/Users'

export const ConnectionObject : DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) ,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Persona, UserEntity, AccountEntity, SessionEntity, VerificationTokenEntity ],
  subscribers: [],
  migrations: [],
}

export const AppDataSource = new DataSource( ConnectionObject )