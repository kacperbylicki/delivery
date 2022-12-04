import { Courier } from "../../domain";
import { CourierMapper } from "../mapper";
import { CourierModel } from "../model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Repository } from "../../../common";

export interface ICourierRepository extends Repository<Courier> {
  getOneById(uuid: string): Promise<Courier | null>;
  getAll(): Promise<Courier[]>;
}

export class CourierRepository implements ICourierRepository {
  constructor(
    @InjectModel(CourierModel.name)
    private readonly courierModel: Model<CourierModel>,
  ) {}

  async exists(pesel: string): Promise<boolean> {
    const persistedCourier = await this.courierModel.findOne({ pesel });

    return !!persistedCourier;
  }

  async getOneById(uuid: string): Promise<Courier | null> {
    const persistedCourier = await this.courierModel.findOne({ uuid });

    return persistedCourier ? CourierMapper.toDomain(persistedCourier) : null;
  }

  async getAll(): Promise<Courier[]> {
    const persistedCouriers = await this.courierModel.find();

    const couriers = persistedCouriers.map((courier: CourierModel) =>
      CourierMapper.toDomain(courier),
    );

    return couriers;
  }

  async saveAndReturn(courier: Courier): Promise<Courier> {
    const persistenceCourier = CourierMapper.toPersistence(courier);

    const courierModel = new this.courierModel(persistenceCourier);
    const persistedCourier = await courierModel.save();

    return CourierMapper.toDomain(persistedCourier);
  }

  async updateAndReturn({ uuid, ...courier }: Partial<Courier>): Promise<Courier | null> {
    const updatedCourier = await this.courierModel.findOneAndUpdate({ uuid }, courier);

    return updatedCourier ? CourierMapper.toDomain(updatedCourier) : null;
  }

  async deleteOne(uuid: string): Promise<void> {
    await this.courierModel.deleteOne({ uuid });
  }
}
