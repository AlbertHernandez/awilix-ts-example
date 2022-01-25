import { InMemoryUserRepository } from "../in-memory-user-repository";
import { UserCreator } from "../../domain/user-creator";
import { UserFinder } from "../../domain/user-finder";
import { ConsoleLogger } from "../console-logger";
import { UserByIdFinder } from "../../domain/user-by-id-finder";

export const logger = new ConsoleLogger();
export const userRepository = new InMemoryUserRepository();

export const userCreator = new UserCreator({
  userRepository,
  logger,
});

export const userFinder = new UserFinder({
  userRepository,
});

export const userByIdFinder = new UserByIdFinder({
  userRepository,
});
