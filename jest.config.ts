import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  bail: true,
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
