import { ResourceNotFoundError } from "@/controllers/errors/resource-not-found-error";
import { UserRepository } from "@/repositories/UserRepository";

interface GetUserProfileUseCaseRequest {
  userId: string;
}

export class GetProfileService {
  private userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ userId }: GetUserProfileUseCaseRequest) {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return { user };
  }
}
