import { BaseService } from "../../../common";
import { Courier } from "../../domain";
import { CourierRepository } from "../../infrastructure";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetCourierService implements BaseService<string, Courier | null> {
  constructor(private readonly courierRepository: CourierRepository) {}

  async execute(uuid: string): Promise<Courier | null> {
    return this.courierRepository.getOneById(uuid);
  }
}
