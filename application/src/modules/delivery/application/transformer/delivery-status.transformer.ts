import camelCase from "lodash.camelcase";
import { BadRequestException } from "@nestjs/common";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";

export const toStatusEnum = (value: string): DeliveryStatus => {
  const camelCaseStatus = camelCase(value);
  const deliveryStatus = DeliveryStatus[camelCaseStatus as keyof typeof DeliveryStatus];

  if (!deliveryStatus) {
    throw new BadRequestException();
  }

  return deliveryStatus;
};
