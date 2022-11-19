import { ApiProperty } from "@nestjs/swagger";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";
import { IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { RecipientDTO } from "./recipient.dto";
import { SenderDTO } from "./sender.dto";
import { Transform, Type } from "class-transformer";
import { toStatusEnum } from "../transformer/delivery-status.transformer";

export class CreateDeliveryDTO {
  @ValidateNested()
  @Type(() => SenderDTO)
  sender!: SenderDTO;

  @ValidateNested()
  @Type(() => RecipientDTO)
  recipient!: RecipientDTO;

  @IsString()
  @IsOptional()
  @MinLength(10)
  @MaxLength(128)
  @ApiProperty({ example: `Notes about delivery` })
  description?: string;
}

export class UpdateDeliveryStatusDTO {
  @Transform(({ value }) => toStatusEnum(value))
  public status!: DeliveryStatus;
}

export class DeliveryQueryDTO {
  @Transform(({ value }) => toStatusEnum(value))
  @IsOptional()
  public status?: DeliveryStatus;

  @IsString()
  @IsOptional()
  public date?: string;
}
