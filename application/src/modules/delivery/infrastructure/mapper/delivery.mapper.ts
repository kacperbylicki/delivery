import { CourierMapper } from "../../../courier";
import { Delivery } from "../../domain/entity/delivery.entity";
import { Delivery as DeliveryModel } from "../model/delivery.model";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";
import { DeliveryUtils } from "../../util/delivery.util";
import { RecipientMapper } from "./recipient.mapper";
import { SenderMapper } from "./sender.mapper";

export class DeliveryMapper {
  static toDomain(raw: any): Delivery {
    const sender = SenderMapper.toDomain(raw.sender);
    const recipient = RecipientMapper.toDomain(raw.recipient);
    const courier = CourierMapper.toDomain(raw.courier);

    const trackingNumber = raw.trackingNumber ?? DeliveryUtils.getRandomTrackingNumber();
    const status = raw.status ?? DeliveryStatus.CREATED;

    return Delivery.create(
      {
        uuid: raw.uuid,
        sender,
        recipient,
        courier,
        status,
        trackingNumber,
        deliveryDate: raw.deliveryDate,
        width: raw.width,
        length: raw.length,
        height: raw.height,
        weight: raw.weight,
      },
      raw.uuid,
    );
  }

  static toPersistence(delivery: Delivery): DeliveryModel {
    return {
      uuid: delivery.uuid,
      sender: delivery.sender,
      recipient: delivery.recipient,
      courier: delivery.courier,
      status: delivery.status,
      trackingNumber: delivery.trackingNumber,
      deliveryDate: delivery.deliveryDate,
      width: delivery.width,
      length: delivery.length,
      height: delivery.height,
      weight: delivery.weight,
    };
  }
}
