import { DeliveryController } from "./application/controller/delivery.controller";
import { DeliveryService } from "./application/service/delivery.service";
import { Module } from "@nestjs/common";

@Module({
  //   imports: [MongooseModule.forFeature([{ name: Delivery.name, schema: DeliveryEntity }])],
  controllers: [DeliveryController],
  providers: [DeliveryService],
  exports: [DeliveryService],
})
export class DeliveryModule {}
