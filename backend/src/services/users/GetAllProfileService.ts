import { UserRepository } from "@/repositories/UserRepository";

export class GetAllUsersProfiles {
  private userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    const users = await this.userRepository.getAllUsersProfiles();

    return { users };
  }
}
