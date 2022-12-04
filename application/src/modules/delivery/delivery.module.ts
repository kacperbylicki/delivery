import {
  CreateDeliveryService,
  DeleteDeliveryService,
  DeliveryController,
  GetAllDeliveriesService,
  GetDeliveryByIdService,
  GetDeliveryByTrackingNumberService,
  UpdateDeliveryStatusService,
} from "./application";
import { DeliveryModelDefinition } from "./infrastructure";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([DeliveryModelDefinition])],
  controllers: [DeliveryController],
  providers: [
    CreateDeliveryService,
    UpdateDeliveryStatusService,
    DeleteDeliveryService,
    GetAllDeliveriesService,
    GetDeliveryByIdService,
    GetDeliveryByTrackingNumberService,
  ],
  exports: [
    CreateDeliveryService,
    UpdateDeliveryStatusService,
    DeleteDeliveryService,
    GetAllDeliveriesService,
    GetDeliveryByIdService,
    GetDeliveryByTrackingNumberService,
  ],
})
export class DeliveryModule {}
