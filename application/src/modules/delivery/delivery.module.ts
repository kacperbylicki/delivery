import { CourierModule } from "../courier";
import {
  CreateDeliveryService,
  DeleteDeliveryService,
  DeliveryController,
  GetAllDeliveriesService,
  GetDeliveryByIdService,
  GetDeliveryByTrackingNumberService,
  UpdateDeliveryStatusService,
} from "./application";
import { DeliveryModelDefinition, DeliveryRepository } from "./infrastructure";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([DeliveryModelDefinition]), CourierModule],
  controllers: [DeliveryController],
  providers: [
    CreateDeliveryService,
    UpdateDeliveryStatusService,
    DeleteDeliveryService,
    GetAllDeliveriesService,
    GetDeliveryByIdService,
    GetDeliveryByTrackingNumberService,
    DeliveryRepository,
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
