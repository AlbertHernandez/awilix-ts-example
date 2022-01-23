import { UserRepository } from "../data-access/user-repository";
import { User } from "../models/user";
import { Logger } from "../modules/logger";

export class BabyCreator {
  #userRepository;
  #logger;

  constructor(dependencies: {
    userRepository: UserRepository;
    logger: Logger;
  }) {
    this.#userRepository = dependencies.userRepository;
    this.#logger = dependencies.logger;
  }

  run({ userId, userName }: { userId: string; userName: string }) {
    const user = new User({
      userName,
      userId,
      age: 0,
    });

    this.#userRepository.save(user);
    this.#logger.log(`New Baby created: ${userName}!`);
  }
}
