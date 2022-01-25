import { UserRepository } from "./user-repository";

export class UserFinder {
  #userRepository;

  constructor(dependencies: { userRepository: UserRepository }) {
    this.#userRepository = dependencies.userRepository;
  }

  run() {
    return this.#userRepository.findAll();
  }
}
