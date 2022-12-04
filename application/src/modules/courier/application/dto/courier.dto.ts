import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

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
  @MinLength(11)
  @MaxLength(11)
  @ApiProperty({ example: `99090911111` })
  pesel!: string;
}

export type UpdateCourierDTO = Partial<CreateCourierDTO>;
