import { ConfigService } from "@nestjs/config";
import { EnvironmentEnum } from "../../domain/enum/config.enum";
import { EnvironmentVariables } from "../validator/config.validator";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppConfigService extends ConfigService {
  get<
    EnvKeyType extends keyof EnvironmentVariables,
    EnvValueType extends EnvironmentVariables[EnvKeyType] = EnvironmentVariables[EnvKeyType],
  >(key: EnvKeyType): EnvValueType {
    return super.get(key) as EnvValueType;
  }

  getPort() {
    return this.get("PORT");
  }

  getEnvironment() {
    return this.get("NODE_ENV");
  }

  getDatabaseUri(): string {
    return this.get("MONGODB_URI");
  }

  getDatabase(): string {
    return this.get("MONGODB_DATABASE");
  }

  isDevelopment() {
    return this.isActualEnvironment(EnvironmentEnum.development);
  }

  isProduction() {
    return this.isActualEnvironment(EnvironmentEnum.production);
  }

  private isActualEnvironment(env: keyof typeof EnvironmentEnum) {
    return this.getEnvironment() === env;
  }
}
