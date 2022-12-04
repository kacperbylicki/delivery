import { BaseService } from "../../../common";
import { CreateDeliveryDTO } from "../dto/delivery.dto";
import { Delivery } from "../../domain/entity/delivery.entity";
import { DeliveryMapper } from "../../infrastructure/mapper/delivery.mapper";
import { DeliveryRepository } from "../../infrastructure/repository/delivery.repository";
import { GetRandomCourierService } from "../../../courier";

export class CreateDeliveryService implements BaseService<CreateDeliveryDTO, Delivery> {
  constructor(
    private readonly getRandomCourierService: GetRandomCourierService,
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async execute(data: CreateDeliveryDTO): Promise<Delivery> {
    const courier = await this.getRandomCourierService.execute();

    const delivery = DeliveryMapper.toDomain({ ...data, courier });

    return this.deliveryRepository.saveAndReturn(delivery);
  }
}
