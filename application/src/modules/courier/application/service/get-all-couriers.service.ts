import { BaseService } from "../../../common";
import { Courier } from "../../domain";
import { CourierRepository } from "../../infrastructure";

export class GetAllCouriersService implements BaseService<void, Courier[]> {
  constructor(private readonly courierRepository: CourierRepository) {}

  async execute(): Promise<Courier[]> {
    return this.courierRepository.getAll();
  }
}
