import { BaseService } from "../../../common";
import { DeliveryRepository } from "../../infrastructure/repository/delivery.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteDeliveryService implements BaseService<string, void> {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async execute(uuid: string): Promise<void> {
    await this.deliveryRepository.deleteOne(uuid);
  }
}
