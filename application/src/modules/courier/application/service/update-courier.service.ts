import { BaseService } from "../../../common";
import { Courier } from "../../domain";
import { CourierRepository } from "../../infrastructure";
import { NotFoundException } from "@nestjs/common";
import { UpdateCourierDTO } from "../dto";

type UpdateCourierPayload = {
  courierId: string;
  data: UpdateCourierDTO;
};

export class UpdateCourierService implements BaseService<UpdateCourierPayload, Courier | null> {
  constructor(private readonly courierRepository: CourierRepository) {}

  async execute({ courierId, data }: UpdateCourierPayload): Promise<Courier | null> {
    const courierExists = await this.courierRepository.exists(courierId);

    if (!courierExists) {
      throw new NotFoundException("Courier does not exists");
    }

    const updatedCourier = await this.courierRepository.updateAndReturn({
      uuid: courierId,
      ...data,
    });

    return updatedCourier;
  }
}
