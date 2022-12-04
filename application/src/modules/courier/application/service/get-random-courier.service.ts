import { BaseService } from "../../../common";
import { Courier } from "../../domain";
import { CourierRepository } from "../../infrastructure";

export class GetRandomCourierService implements BaseService<void, Courier> {
  constructor(private readonly courierRepository: CourierRepository) {}

  async execute(): Promise<Courier> {
    const couriers = await this.courierRepository.getAll();

    const randomCourierIndex = Math.floor(Math.random() * couriers.length);

    return couriers[randomCourierIndex];
  }
}
