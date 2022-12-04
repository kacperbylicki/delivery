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
  UseInterceptors,
} from "@nestjs/common";
import { Courier } from "../../domain";
import { CreateCourierDTO, UpdateCourierDTO } from "../dto";
import {
  CreateCourierService,
  DeleteCourierService,
  GetAllCouriersService,
  GetCourierService,
  UpdateCourierService,
} from "../service";
import { TimeoutInterceptor, TransformInterceptor } from "../../../common";

@Controller("couriers")
@ApiTags(CourierController.name)
@UseInterceptors(TimeoutInterceptor, TransformInterceptor)
export class CourierController {
  constructor(
    private readonly getCourierService: GetCourierService,
    private readonly getAllCouriersService: GetAllCouriersService,
    private readonly createCourierService: CreateCourierService,
    private readonly updateCourierService: UpdateCourierService,
    private readonly deleteCourierService: DeleteCourierService,
  ) {}

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async getCourierById(@Param("id") courierId: string): Promise<Courier | null> {
    return this.getCourierService.execute(courierId);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getCouriers(): Promise<Courier[]> {
    return this.getAllCouriersService.execute();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCourier(@Body() body: CreateCourierDTO): Promise<Courier> {
    return this.createCourierService.execute(body);
  }

  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  async updateDeliveryStatus(
    @Param("id") courierId: string,
    @Body() data: UpdateCourierDTO,
  ): Promise<Courier | null> {
    return this.updateCourierService.execute({ courierId, data });
  }

  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  async deleteCourier(@Param("id") courierId: string): Promise<void> {
    return this.deleteCourierService.execute(courierId);
  }
}
