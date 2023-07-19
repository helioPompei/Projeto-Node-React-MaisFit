import { PhysicalRepository } from "@/repositories/PhysicalRepository";

export class GetAllPhysicalsByUserIdService {
  constructor(private physicalRepository: PhysicalRepository) {}

  async execute(id: string) {
    const physicals = await this.physicalRepository.findAllPhysicalsByUserId(
      id
    );

    return { physicals };
  }
}
