import { EnvironmentEnum } from "../../domain/enum/config.enum";
import { IsEnum, IsNotEmpty, IsPositive, IsString, validateSync } from "class-validator";
import { plainToClass } from "class-transformer";

export class EnvironmentVariables {
  @IsPositive()
  @IsNotEmpty()
  PORT!: number;

  @IsEnum(EnvironmentEnum)
  NODE_ENV!: string;

  @IsString()
  @IsNotEmpty()
  MONGODB_URI!: string;

  @IsString()
  @IsNotEmpty()
  MONGODB_DATABASE!: string;
}

export function validate(config: Record<string, unknown>) {
  const configToValidate = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(configToValidate, { skipMissingProperties: false });

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return configToValidate;
}
