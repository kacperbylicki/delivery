import { BaseService } from "../../../common";
import { Courier } from "../../domain";
import { CourierRepository } from "../../infrastructure";

export class GetCourierService implements BaseService<string, Courier | null> {
  constructor(private readonly courierRepository: CourierRepository) {}

  async execute(uuid: string): Promise<Courier | null> {
    return this.courierRepository.getOneById(uuid);
  }
}
