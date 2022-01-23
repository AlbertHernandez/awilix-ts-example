import { UserRepository } from "../../data-access/user-repository";
import { UserCreator } from "../../services/user-creator";
import { UserFinder } from "../../services/user-finder";
import { Logger } from "../logger";
import { UserByIdFinder } from "../../services/user-by-id-finder";

export const logger = new Logger();
export const userRepository = new UserRepository();

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
