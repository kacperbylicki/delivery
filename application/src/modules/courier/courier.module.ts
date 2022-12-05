import {
  CourierController,
  CreateCourierService,
  DeleteCourierService,
  GetAllCouriersService,
  GetCourierService,
  GetRandomCourierService,
  UpdateCourierService,
} from "./application";
import { CourierModelDefinition, CourierRepository } from "./infrastructure";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([CourierModelDefinition])],
  controllers: [CourierController],
  providers: [
    CreateCourierService,
    DeleteCourierService,
    GetAllCouriersService,
    GetCourierService,
    GetRandomCourierService,
    UpdateCourierService,
    CourierRepository,
  ],
  exports: [
    CreateCourierService,
    DeleteCourierService,
    GetAllCouriersService,
    GetCourierService,
    GetRandomCourierService,
    UpdateCourierService,
  ],
})
export class CourierModule {}
