import { BadRequestException } from "@nestjs/common";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";
import { snakeCase } from "lodash";

export const toStatusEnum = (value: string): DeliveryStatus => {
  const snakeCaseStatus = snakeCase(value).toUpperCase();
  const deliveryStatus = DeliveryStatus[snakeCaseStatus as keyof typeof DeliveryStatus];

  if (!deliveryStatus) {
    throw new BadRequestException();
  }

  return deliveryStatus;
};
