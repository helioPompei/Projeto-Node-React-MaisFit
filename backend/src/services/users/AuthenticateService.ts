import { InvalidCredentials } from "@/controllers/errors/invalid-credentials-error";
import { UserRepository } from "@/repositories/UserRepository";
import { hash, compare } from "bcrypt";

interface AuthenticateServiceRequest {
  email: string;
  password: string;
}

export class AuthenticateService {
  private userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }: AuthenticateServiceRequest) {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new InvalidCredentials();
    }

    const doesPasswordMatches = await compare(password, user.password_hash);

    if (!doesPasswordMatches) {
      throw new InvalidCredentials();
    }

    return { user };
  }
}
