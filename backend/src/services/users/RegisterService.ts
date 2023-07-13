import { UserAlreadyExistsError } from "@/controllers/errors/user-already-exists-error";
import { UserRepository } from "@/repositories/UserRepository";
import { hash } from "bcrypt";

interface RegisterServiceRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterService {
  private userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }: RegisterServiceRequest) {
    const userWithSameEmail = await this.userRepository.findUserByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const passwordHash = await hash(password, 6);

    const user = this.userRepository.create({
      name,
      email,
      passwordHash,
    });

    return user;
  }
}
