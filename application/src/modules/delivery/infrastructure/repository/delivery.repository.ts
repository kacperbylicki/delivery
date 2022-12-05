import { Delivery } from "../../domain";
import { DeliveryMapper } from "../mapper";
import { Delivery as DeliveryModel } from "../model";
import { DeliveryQueryDTO } from "../../application/dto/delivery.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Repository } from "../../../common";

export interface IDeliveryRepository extends Repository<Delivery> {
  getOneById(uuid: string): Promise<Delivery | null>;
  getOneByTrackingNumber(trackingNumber: string): Promise<Delivery | null>;
  getAll(query?: DeliveryQueryDTO): Promise<Delivery[]>;
}

export class DeliveryRepository implements IDeliveryRepository {
  constructor(
    @InjectModel(DeliveryModel.name)
    private readonly deliveryModel: Model<DeliveryModel>,
  ) {}

  async exists(trackingNumber: string): Promise<boolean> {
    const persistedDelivery = await this.deliveryModel.findOne({ trackingNumber });

    return !!persistedDelivery;
  }

  async getOneById(uuid: string): Promise<Delivery | null> {
    const persistedDelivery = await this.deliveryModel.findOne({ uuid });

    return persistedDelivery ? DeliveryMapper.toDomain(persistedDelivery) : null;
  }

  async getOneByTrackingNumber(trackingNumber: string): Promise<Delivery | null> {
    const persistedDelivery = await this.deliveryModel.findOne({ trackingNumber });

    return persistedDelivery ? DeliveryMapper.toDomain(persistedDelivery) : null;
  }

  async getAll(queryDto?: DeliveryQueryDTO): Promise<Delivery[]> {
    const query = {
      status: queryDto?.status,
      deliveryDate: queryDto?.date,
      "courier.uuid": queryDto?.courierId,
    };

    const persistedDeliveries = await this.deliveryModel.find(query);

    const deliveries = persistedDeliveries.map((delivery: DeliveryModel) =>
      DeliveryMapper.toDomain(delivery),
    );

    return deliveries;
  }

  async saveAndReturn(delivery: Delivery): Promise<Delivery> {
    const persistenceDelivery = DeliveryMapper.toPersistence(delivery);

    const deliveryModel = new this.deliveryModel(persistenceDelivery);
    const persistedDelivery = await deliveryModel.save();

    return DeliveryMapper.toDomain(persistedDelivery);
  }

  async updateAndReturn({ uuid, status }: Partial<Delivery>): Promise<Delivery | null> {
    const updatedDelivery = await this.deliveryModel.findOneAndUpdate({ uuid }, { status });

    return updatedDelivery ? DeliveryMapper.toDomain(updatedDelivery) : null;
  }

  async deleteOne(uuid: string): Promise<void> {
    await this.deliveryModel.deleteOne({ uuid });
  }
}
