import * as awilix from "awilix";
import { UserByIdFinder } from "../../domain/user-by-id-finder";
import { UserCreator } from "../../domain/user-creator";
import { UserFinder } from "../../domain/user-finder";
import { ConsoleLogger } from "../console-logger";
import { InMemoryUserRepository } from "../in-memory-user-repository";

const container = awilix.createContainer();

container.register({
  logger: awilix.asClass(ConsoleLogger),
  userRepository: awilix.asClass(InMemoryUserRepository).singleton(),
  userCreator: awilix.asClass(UserCreator),
  userFinder: awilix.asClass(UserFinder),
  userByIdFinder: awilix.asClass(UserByIdFinder),
});

export const userCreator = container.resolve("userCreator");
export const userFinder = container.resolve("userFinder");
export const userByIdFinder = container.resolve("userByIdFinder");
