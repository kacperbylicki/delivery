import { ApiTags } from "@nestjs/swagger";
import {
  Body,
  Controller,
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
import { DeliveryService } from "../service/delivery.service";
import { TimeoutInterceptor, TransformInterceptor } from "../../../common";

@Controller("deliveries")
@ApiTags(DeliveryController.name)
@UseInterceptors(TimeoutInterceptor, TransformInterceptor)
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async getDeliveryById(@Param("id") deliveryId: string): Promise<Delivery | null> {
    return this.deliveryService.getOneById(deliveryId);
  }

  @Get(":courierId")
  @HttpCode(HttpStatus.OK)
  async getDeliveriesByCourierId(@Param("courierId") courierId: string): Promise<Delivery[]> {
    return this.deliveryService.getAllByCourierId(courierId);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getDeliveriesByStatus(@Query() query: DeliveryQueryDTO): Promise<Delivery[]> {
    return this.deliveryService.getAllByStatusAndDate(query.status, query.date);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createDelivery(@Body() body: CreateDeliveryDTO): Promise<Delivery> {
    return this.deliveryService.createDelivery(body);
  }

  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  async updateDeliveryStatus(
    @Param("id") deliveryId: string,
    @Body() body: UpdateDeliveryStatusDTO,
  ): Promise<Delivery | null> {
    return this.deliveryService.updateDeliveryStatus(deliveryId, body.status);
  }
}
