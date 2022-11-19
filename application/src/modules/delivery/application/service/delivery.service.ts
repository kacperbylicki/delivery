import { CreateDeliveryDTO } from "../dto/delivery.dto";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel(Delivery.name) private readonly model: Model<DeliveryDocument>,
    private readonly courierService: CourierService,
  ) {}

  async createDelivery(deliveryDto: CreateDeliveryDTO): Promise<Delivery> {
    const courier = await this.courierService.getRandomCourier();

    const deliveryDocument = {
      ...deliveryDto,
      courier,
    };

    return await new this.model(deliveryDocument).save();
  }

  async getOneById(deliveryId: string): Promise<Delivery | null> {
    return await this.model.findOne({ uuid: deliveryId }).exec();
  }

  async getOneByTrackingNumber(trackingNumber: string): Promise<Delivery | null> {
    return await this.model.findOne({ trackingNumber }).exec();
  }

  async getAllByStatusAndDate(status?: DeliveryStatus, date?: string): Promise<Delivery[]> {
    return await this.model.find({ status, expectedDeliveryDate: date }).exec();
  }

  async getAllByCourierId(courierId: string): Promise<Delivery[]> {
    return await this.model.find({ "courier._id": courierId }).exec();
  }

  async updateDeliveryStatus(deliveryId: string, status: DeliveryStatus): Promise<Delivery | null> {
    return await this.model.findOneAndUpdate({ uuid: deliveryId }, { status }).exec();
  }
}
