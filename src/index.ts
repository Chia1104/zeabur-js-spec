import ZeaburClient from "./zeabur-client";

export { ZeaburClient };

export const createClient = (apiKey: string) => {
  return new ZeaburClient(apiKey);
};

export * from "./types";

export { RequestError } from "./error";
