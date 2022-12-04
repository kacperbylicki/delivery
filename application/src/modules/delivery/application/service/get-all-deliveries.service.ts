import { BaseService } from "../../../common";
import { Delivery } from "../../domain/entity/delivery.entity";
import { DeliveryQueryDTO } from "../dto/delivery.dto";
import { DeliveryRepository } from "../../infrastructure/repository/delivery.repository";

export class GetAllDeliveriesService implements BaseService<DeliveryQueryDTO, Delivery[]> {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async execute(query?: DeliveryQueryDTO): Promise<Delivery[]> {
    return this.deliveryRepository.getAllByCourierId(query);
  }
}
