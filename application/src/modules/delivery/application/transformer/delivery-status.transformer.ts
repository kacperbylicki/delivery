import snakeCase from "lodash.snakecase";
import { BadRequestException } from "@nestjs/common";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";

export const toStatusEnum = (value: string): DeliveryStatus => {
  const snakeCaseStatus = snakeCase(value).toUpperCase();
  const deliveryStatus = DeliveryStatus[snakeCaseStatus as keyof typeof DeliveryStatus];

  if (!deliveryStatus) {
    throw new BadRequestException();
  }

  return deliveryStatus;
};
