import { UserRepository } from "../data-access/user-repository";

export class BabyFinder {
  #userRepository;

  constructor(dependencies: { userRepository: UserRepository }) {
    this.#userRepository = dependencies.userRepository;
  }

  run() {
    return this.#userRepository.findAll();
  }
}
