import { Sender } from "../../domain/entity/sender.entity";

export class SenderMapper {
  static toDomain(raw: any): Sender {
    return Sender.create(raw, raw.uuid);
  }
}
