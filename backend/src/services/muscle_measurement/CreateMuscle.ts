import { ResourceNotFoundError } from "@/controllers/errors/resource-not-found-error";
import { MuscleReposity } from "@/repositories/MuscleRepository";

interface createMuscleRequest {
  muscleName: string;
  measurement: number;
  physicalEvaluationId: string;
}

// Class Create Muscle
export class CreateMuscleService {
  private muscleRepository;

  constructor(muscleRepository: MuscleReposity) {
    this.muscleRepository = muscleRepository;
  }

  // Execute Function
  async execute({
    muscleName,
    measurement,
    physicalEvaluationId,
  }: createMuscleRequest) {
    
    const physicalEvaluation =
      await this.muscleRepository.physicalEvaluationById(physicalEvaluationId);

    if (!physicalEvaluation) {
      throw new ResourceNotFoundError();
    }

    const muscleMeasurement = await this.muscleRepository.create({
      muscleName,
      measurement,
      physicalEvaluationId,
    });

    return { muscleMeasurement };
  }
}
