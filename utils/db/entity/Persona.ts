
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  lastName1: string

  @Column()
  lastName2: string

  @Column({
    length: 13,
  })
  rfc: string
}