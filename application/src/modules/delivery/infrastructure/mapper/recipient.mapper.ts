import { Recipient } from "../../domain/entity/recipient.entity";

export class RecipientMapper {
  static toDomain(raw: any): Recipient {
    return Recipient.create(raw, raw.uuid);
  }
}
