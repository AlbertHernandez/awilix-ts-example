import { User } from "./user";
import { UserRepository } from "./user-repository";
import { Logger } from "./logger";

export class UserCreator {
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
    this.#logger.log(`New user created: ${userName}!`);
  }
}
