import { Courier } from "../../domain";
import { CourierModel } from "../model";

export class CourierMapper {
  static toDomain(raw: any): Courier {
    return Courier.create(raw, raw.uuid);
  }

  static toPersistence(courier: Courier): CourierModel {
    return {
      uuid: courier.uuid,
      name: courier.name,
      surname: courier.surname,
      pesel: courier.pesel,
    };
  }
}
