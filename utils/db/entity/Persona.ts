
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity({ name: 'personas' })
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

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date
}