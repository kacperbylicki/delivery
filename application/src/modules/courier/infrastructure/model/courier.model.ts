import { Model } from "mongoose";
import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Courier extends Model {
  @Prop({ type: String, unique: true })
  uuid!: string;

  @Prop({ type: String })
  name!: string;

  @Prop({ type: String })
  surname!: string;

  @Prop({ type: String })
  pesel!: string;
}

export const CourierSchema = SchemaFactory.createForClass(Courier);
export const CourierModelDefinition: ModelDefinition = {
  name: Courier.name,
  schema: CourierSchema,
};
