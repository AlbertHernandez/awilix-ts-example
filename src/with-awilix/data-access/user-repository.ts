import { User } from "../models/user";

export class UserRepository {
  #userMemory: Record<string, User>;

  constructor() {
    this.#userMemory = {};
  }

  save(user: User) {
    this.#userMemory[user.userId] = user;
  }

  findById(userId: string) {
    return this.#userMemory[userId] || null;
  }

  findAll() {
    return Object.values(this.#userMemory);
  }
}
