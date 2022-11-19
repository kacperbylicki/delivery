import { AppConfigService } from "../../application/service/config.service";

type MockAppConfigService = Record<keyof Pick<AppConfigService, "get">, jest.Mock>;

const createMockAppConfigService = (): MockAppConfigService => ({
  get: jest.fn(),
});

export { MockAppConfigService, createMockAppConfigService };
