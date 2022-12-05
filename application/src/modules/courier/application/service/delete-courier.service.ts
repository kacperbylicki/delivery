import { BaseService } from "../../../common";
import { CourierRepository } from "../../infrastructure";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteCourierService implements BaseService<string, void> {
  constructor(private readonly courierRepository: CourierRepository) {}

  async execute(uuid: string): Promise<void> {
    await this.courierRepository.deleteOne(uuid);
  }
}
