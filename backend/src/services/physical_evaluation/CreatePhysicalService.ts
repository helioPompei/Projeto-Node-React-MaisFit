import { UserNotFound } from "@/controllers/errors/user-not-found-error";
import { PhysicalEvaluationRepository } from "@/repositories/PhysicalEvaluationRepository";

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

// Class Create Physical
export class CreatePhysicalService {
  private physicalRepository;

  constructor(physicalRepository: PhysicalEvaluationRepository) {
    this.physicalRepository = physicalRepository;
  }

  // Execute Function
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
