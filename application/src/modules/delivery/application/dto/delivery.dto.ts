import { ApiProperty } from "@nestjs/swagger";
import { DeliveryStatus } from "../../domain/enum/delivery-status.enum";
import { IsEnum, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from "class-validator";
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

  @IsNumber()
  @Min(1)
  @Max(400)
  @ApiProperty({ example: 40, description: "Length in cm" })
  length!: number;

  @IsNumber()
  @Min(1)
  @Max(150)
  @ApiProperty({ example: 40, description: "Width in cm" })
  width!: number;

  @IsNumber()
  @Min(1)
  @Max(200)
  @ApiProperty({ example: 40, description: "Height in cm" })
  height!: number;

  @IsNumber()
  @Min(0.1)
  @Max(90)
  @ApiProperty({ example: 25, description: "Weight in kg" })
  weight!: number;
}

export class UpdateDeliveryStatusDTO {
  @Transform(({ value }) => toStatusEnum(value))
  @IsEnum(DeliveryStatus)
  public status!: DeliveryStatus;
}

export class DeliveryQueryDTO {
  @Transform(({ value }) => toStatusEnum(value))
  @IsEnum(DeliveryStatus)
  @IsOptional()
  public status?: DeliveryStatus;

  @IsString()
  @IsOptional()
  public date?: string;

  @IsString()
  @IsOptional()
  public courierId?: string;
}
