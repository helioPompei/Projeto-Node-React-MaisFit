import { UserNotFound } from "@/controllers/errors/user-not-found-error";
import { PhysicalEvaluationRepository } from "@/repositories/PhysicalEvaluationRepository";

interface EditPhysicalRequest {
  id: string;
  evaluationDate: Date;
  height: number;
  weight: number;
  imc: number;
  currentFat: number;
  idealFat: number;
  goal: string;
  observation: string | null;
  userId: string;
}

// Class Edit Physical
export class EditPhysicalService {
  private physicalRepository;

  constructor(physicalRepository: PhysicalEvaluationRepository) {
    this.physicalRepository = physicalRepository;
  }

  async execute({
    id,
    evaluationDate,
    height,
    weight,
    imc,
    currentFat,
    idealFat,
    goal,
    observation,
    userId,
  }: EditPhysicalRequest) {
    const user = await this.physicalRepository.findUserById(userId);

    if (!user) {
      throw new UserNotFound();
    }

    const physicalEvaluation = await this.physicalRepository.edit({
      id,
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
