import * as awilix from "awilix";

import { UserRepository } from "../../data-access/user-repository";
import { BabyCreator } from "../../services/baby-creator";
import { BabyFinder } from "../../services/baby-finder";
import { Logger } from "../logger";
import { BabyByIdFinder } from "../../services/baby-by-id-finder";

const container = awilix.createContainer();

container.register({
  logger: awilix.asClass(Logger),
  userRepository: awilix.asClass(UserRepository).singleton(),
  babyCreator: awilix.asClass(BabyCreator),
  babyFinder: awilix.asClass(BabyFinder),
  babyByIdFinder: awilix.asClass(BabyByIdFinder),
});

export const babyCreator = container.resolve("babyCreator");
export const babyFinder = container.resolve("babyFinder");
export const babyByIdFinder = container.resolve("babyByIdFinder");
