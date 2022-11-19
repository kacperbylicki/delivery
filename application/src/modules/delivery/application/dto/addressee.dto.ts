import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class AddresseeDTO {
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
  @MinLength(2)
  @MaxLength(64)
  @ApiProperty({ example: `2079 Allison Avenue` })
  firstLineAddress!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(64)
  @ApiProperty({ example: `32919, Melbourne` })
  secondLineAddress!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(64)
  @ApiProperty({ example: `Florida` })
  state!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(64)
  @ApiProperty({ example: `United States` })
  country!: string;
}
