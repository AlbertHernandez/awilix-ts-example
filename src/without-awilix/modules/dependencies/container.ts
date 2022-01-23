import { UserRepository } from "../../data-access/user-repository";
import { BabyCreator } from "../../services/baby-creator";
import { BabyFinder } from "../../services/baby-finder";
import { Logger } from "../logger";
import { BabyByIdFinder } from "../../services/baby-by-id-finder";

export const logger = new Logger();
export const userRepository = new UserRepository();

export const babyCreator = new BabyCreator({
  userRepository,
  logger,
});

export const babyFinder = new BabyFinder({
  userRepository,
});

export const babyByIdFinder = new BabyByIdFinder({
  userRepository,
});
