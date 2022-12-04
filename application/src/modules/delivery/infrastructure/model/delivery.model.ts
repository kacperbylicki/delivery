import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";
import { Model } from "mongoose";
import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Recipient } from "../../domain/entity/recipient.entity";
import { Sender } from "../../domain/entity/sender.entity";

@Schema()
export class Delivery extends Model {
  @Prop({ type: String, unique: true })
  uuid!: string;

  @Prop({ type: Sender })
  sender!: Sender;

  @Prop({ type: Recipient })
  recipient!: Recipient;

  @Prop({ type: String, enum: DeliveryStatus })
  status!: string;

  @Prop({ type: Number })
  length!: number;

  @Prop({ type: Number })
  width!: number;

  @Prop({ type: Number })
  height!: number;

  @Prop({ type: Number })
  weight!: number;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
export const DeliveryModelDefinition: ModelDefinition = {
  name: Delivery.name,
  schema: DeliverySchema,
};
