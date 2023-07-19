import { PhysicalRepository } from "@/repositories/PhysicalRepository";

export class GetAllPhysicalsInAppService {
  constructor(private physicalRepository: PhysicalRepository) {}

  async execute() {
    const physicals = await this.physicalRepository.findAllPhysicalsInApp();

    return { physicals };
  }
}
