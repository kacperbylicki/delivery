import dayjs from "dayjs";
import { BaseService } from "../../../common";
import { CreateDeliveryDTO } from "../dto/delivery.dto";
import { Delivery } from "../../domain/entity/delivery.entity";
import { DeliveryMapper } from "../../infrastructure/mapper/delivery.mapper";
import { DeliveryRepository } from "../../infrastructure/repository/delivery.repository";
import { GetRandomCourierService } from "../../../courier";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateDeliveryService implements BaseService<CreateDeliveryDTO, Delivery> {
  constructor(
    private readonly getRandomCourierService: GetRandomCourierService,
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async execute(data: CreateDeliveryDTO): Promise<Delivery> {
    const courier = await this.getRandomCourierService.execute();
    const deliveryDate = dayjs().add(2, "day").toDate();

    const delivery = DeliveryMapper.toDomain({ ...data, courier, deliveryDate });

    return this.deliveryRepository.saveAndReturn(delivery);
  }
}
