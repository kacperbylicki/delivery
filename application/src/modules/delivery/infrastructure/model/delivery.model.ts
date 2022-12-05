import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";
import { Model } from "mongoose";
import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Recipient } from "../../domain/entity/recipient.entity";
import { Sender } from "../../domain/entity/sender.entity";

@Schema()
export class Delivery extends Model {
  @Prop({ type: String, unique: true, required: true })
  uuid!: string;

  @Prop({ type: Sender, required: true })
  sender!: Sender;

  @Prop({ type: Recipient, required: true })
  recipient!: Recipient;

  @Prop({ type: String, enum: DeliveryStatus, required: true })
  status!: string;

  @Prop({ type: Date, required: true })
  deliveryDate!: Date;

  @Prop({ type: Number, required: true })
  length!: number;

  @Prop({ type: Number, required: true })
  width!: number;

  @Prop({ type: Number, required: true })
  height!: number;

  @Prop({ type: Number, required: true })
  weight!: number;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
export const DeliveryModelDefinition: ModelDefinition = {
  name: Delivery.name,
  schema: DeliverySchema,
};
