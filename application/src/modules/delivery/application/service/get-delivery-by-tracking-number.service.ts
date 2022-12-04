import { BaseService } from "../../../common";
import { Delivery } from "../../domain/entity/delivery.entity";
import { DeliveryRepository } from "../../infrastructure/repository/delivery.repository";

export class GetDeliveryByTrackingNumberService implements BaseService<string, Delivery | null> {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async execute(uuid: string): Promise<Delivery | null> {
    return this.deliveryRepository.getOneByTrackingNumber(uuid);
  }
}
