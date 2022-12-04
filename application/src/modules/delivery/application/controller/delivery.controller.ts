import { ApiTags } from "@nestjs/swagger";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { CreateDeliveryDTO, DeliveryQueryDTO, UpdateDeliveryStatusDTO } from "../dto/delivery.dto";
import {
  CreateDeliveryService,
  DeleteDeliveryService,
  GetAllDeliveriesService,
  GetDeliveryByIdService,
  GetDeliveryByTrackingNumberService,
  UpdateDeliveryStatusService,
} from "../service";
import { Delivery } from "../../domain/entity/delivery.entity";
import { TimeoutInterceptor, TransformInterceptor } from "../../../common";

@Controller("deliveries")
@ApiTags(DeliveryController.name)
@UseInterceptors(TimeoutInterceptor, TransformInterceptor)
export class DeliveryController {
  constructor(
    private readonly getDeliveryService: GetDeliveryByIdService,
    private readonly getDeliveryByTrackingNumberService: GetDeliveryByTrackingNumberService,
    private readonly getAllDeliveriesService: GetAllDeliveriesService,
    private readonly createDeliveryService: CreateDeliveryService,
    private readonly updateDeliveryStatusService: UpdateDeliveryStatusService,
    private readonly deleteDeliveryService: DeleteDeliveryService,
  ) {}

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async getDeliveryById(@Param("id") deliveryId: string): Promise<Delivery | null> {
    return this.getDeliveryService.execute(deliveryId);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getDeliveryByTrackingNumber(
    @Query("trackingNumber") trackingNumber: string,
  ): Promise<Delivery | null> {
    return this.getDeliveryByTrackingNumberService.execute(trackingNumber);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getDeliveries(@Query() query: DeliveryQueryDTO): Promise<Delivery[]> {
    return this.getAllDeliveriesService.execute(query);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createDelivery(@Body() body: CreateDeliveryDTO): Promise<Delivery> {
    return this.createDeliveryService.execute(body);
  }

  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  async updateDeliveryStatus(
    @Param("id") deliveryId: string,
    @Body() data: UpdateDeliveryStatusDTO,
  ): Promise<Delivery | null> {
    return this.updateDeliveryStatusService.execute({ deliveryId, data });
  }

  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  async deleteDelivery(@Param("id") deliveryId: string): Promise<void> {
    return this.deleteDeliveryService.execute(deliveryId);
  }
}
