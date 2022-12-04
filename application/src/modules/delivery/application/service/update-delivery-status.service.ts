import { BaseService } from "../../../common";
import { Delivery } from "../../domain/entity/delivery.entity";
import { DeliveryRepository } from "../../infrastructure";
import { NotFoundException } from "@nestjs/common";
import { UpdateDeliveryStatusDTO } from "../dto/delivery.dto";

type UpdateDeliveryStatusPayload = {
  deliveryId: string;
  data: UpdateDeliveryStatusDTO;
};

export class UpdateDeliveryStatusService
  implements BaseService<UpdateDeliveryStatusPayload, Delivery | null>
{
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async execute({ deliveryId, data }: UpdateDeliveryStatusPayload): Promise<Delivery | null> {
    const deliveryExists = await this.deliveryRepository.exists(deliveryId);

    if (!deliveryExists) {
      throw new NotFoundException("Delivery does not exists");
    }

    const updatedDelivery = await this.deliveryRepository.updateAndReturn({
      uuid: deliveryId,
      status: data.status,
    });

    return updatedDelivery;
  }
}
