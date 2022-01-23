import * as awilix from "awilix";

import { UserRepository } from "../../data-access/user-repository";
import { UserCreator } from "../../services/user-creator";
import { UserFinder } from "../../services/user-finder";
import { Logger } from "../logger";
import { UserByIdFinder } from "../../services/user-by-id-finder";

const container = awilix.createContainer();

container.register({
  logger: awilix.asClass(Logger),
  userRepository: awilix.asClass(UserRepository).singleton(),
  userCreator: awilix.asClass(UserCreator),
  userFinder: awilix.asClass(UserFinder),
  userByIdFinder: awilix.asClass(UserByIdFinder),
});

export const userCreator = container.resolve("userCreator");
export const userFinder = container.resolve("userFinder");
export const userByIdFinder = container.resolve("userByIdFinder");
