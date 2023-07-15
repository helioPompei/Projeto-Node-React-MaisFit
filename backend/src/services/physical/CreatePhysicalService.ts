import { UserNotFound } from "@/controllers/errors/user-not-found-error";
import { PhysicalRepository } from "@/repositories/PhysicalRepository";

interface CreatePhysicalRequest {
  evaluationDate: Date;
  height: number;
  weight: number;
  imc: number;
  currentFat: number;
  idealFat: number;
  goal: string;
  observation?: string;
  userId: string;
}

export class CreatePhysicalService {
  private physicalRepository;

  constructor(physicalRepository: PhysicalRepository) {
    this.physicalRepository = physicalRepository;
  }

  async execute({
    evaluationDate,
    height,
    weight,
    imc,
    currentFat,
    idealFat,
    goal,
    observation,
    userId,
  }: CreatePhysicalRequest) {
    const user = await this.physicalRepository.findUserById(userId);

    if (!user) {
      throw new UserNotFound();
    }

    const physicalEvaluation = await this.physicalRepository.create({
      evaluationDate,
      height,
      weight,
      imc,
      currentFat,
      idealFat,
      goal,
      observation,
      userId,
    });

    return { physicalEvaluation };
  }
}
