import { ApiProperty } from "@nestjs/swagger";
import { IsAdult } from "../decorator";
import { IsString, MaxLength, MinLength } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateCourierDTO {
  @IsString()
  @MinLength(2)
  @MaxLength(64)
  @ApiProperty({ example: `John` })
  name!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(64)
  @ApiProperty({ example: `Doe` })
  surname!: string;

  @IsString()
  @IsAdult({ message: "Courier must be an adult" })
  @MinLength(11)
  @MaxLength(11)
  @ApiProperty({ example: `99090911111` })
  pesel!: string;
}

export class UpdateCourierDTO extends PartialType(CreateCourierDTO) {}
