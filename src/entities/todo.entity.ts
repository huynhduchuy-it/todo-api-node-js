import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Todo extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  completed: boolean;
}
