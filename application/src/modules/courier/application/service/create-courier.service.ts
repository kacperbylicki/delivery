import { BaseService } from "../../../common";
import { ConflictException, Injectable } from "@nestjs/common";
import { Courier } from "../../domain";
import { CourierMapper } from "../../infrastructure/mapper";
import { CourierRepository } from "../../infrastructure";
import { CreateCourierDTO } from "../dto";

@Injectable()
export class CreateCourierService implements BaseService<CreateCourierDTO, Courier> {
  constructor(private readonly courierRepository: CourierRepository) {}

  async execute(data: CreateCourierDTO): Promise<Courier> {
    const courierExists = await this.courierRepository.exists(data.pesel);

    if (courierExists) {
      throw new ConflictException("Courier already exists");
    }

    const courier = CourierMapper.toDomain(data);

    return this.courierRepository.saveAndReturn(courier);
  }
}
