import { Model } from "mongoose";
import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class CourierModel extends Model {
  @Prop({ type: String, unique: true })
  uuid!: string;

  @Prop({ type: String })
  name!: string;

  @Prop({ type: String })
  surname!: string;

  @Prop({ type: String })
  pesel!: string;
}

export const CourierSchema = SchemaFactory.createForClass(CourierModel);
export const CourierModelDefinition: ModelDefinition = {
  name: CourierModel.name,
  schema: CourierSchema,
};
