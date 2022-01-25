import { User } from "./user";

export interface UserRepository {
  save(user: User): void;
  findById(userId: string): User;
  findAll(): Array<User>;
}
