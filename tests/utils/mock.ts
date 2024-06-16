import { Column, DataSource, Entity, PrimaryGeneratedColumn } from "typeorm";

const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  port: 3305,
  synchronize: false,
  logging: true,
  database: "mock",
});

@Entity({ name: "roles" })
class Role {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", type: "text", nullable: false })
  name: string;
}

export { dataSource, Role };
