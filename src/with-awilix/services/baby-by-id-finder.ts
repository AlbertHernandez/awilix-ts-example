import { UserRepository } from "../data-access/user-repository";

export class BabyByIdFinder {
  #userRepository;

  constructor(dependencies: { userRepository: UserRepository }) {
    this.#userRepository = dependencies.userRepository;
  }

  run(userId: string) {
    return this.#userRepository.findById(userId);
  }
}
