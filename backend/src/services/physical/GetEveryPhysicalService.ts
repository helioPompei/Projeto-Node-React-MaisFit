import { PhysicalRepository } from "@/repositories/PhysicalRepository";

export class GetEveryPhysicalService {
  constructor(private physicalRepository: PhysicalRepository) {}

  async execute() {
    const physicals = await this.physicalRepository.findEveryRepositoy();

    return { physicals };
  }
}
