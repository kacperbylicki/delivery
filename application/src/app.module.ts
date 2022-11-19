import { AppConfigModule } from "./config";
import { CourierModule } from "./modules/courier";
import { DatabaseModule } from "./modules/database";
import { DeliveryModule } from "./modules/delivery";
import { HealthModule } from "./modules/health";
import { LoggerModule } from "nestjs-pino";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    DatabaseModule.forRoot(),
    LoggerModule.forRoot(),
    AppConfigModule.forRoot(),
    HealthModule,
    DeliveryModule,
    CourierModule,
  ],
})
export class AppModule {}
