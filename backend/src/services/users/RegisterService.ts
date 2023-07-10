import { UserAlreadyExistsError } from "@/controllers/errors/user-already-exists-error";
import { UserRepository } from "@/repositories/UserRepository";
import { hash } from "bcrypt";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterService {
  private userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const userWithSameEmail = await this.userRepository.findUserByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const password_hash = await hash(password, 6);

    const user = this.userRepository.create({
      name,
      email,
      password_hash,
    });

    return user;
  }
}
