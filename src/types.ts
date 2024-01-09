export type { ClientError } from "graphql-request";

export const Region = {
  SFO1: "sfo1",
  HKG1: "hkg1",
} as const;

export type Region = (typeof Region)[keyof typeof Region];

export const ServiceTemplate = {
  GIT: "GIT",
} as const;

export type ServiceTemplate =
  (typeof ServiceTemplate)[keyof typeof ServiceTemplate];

export type CreateProjectResponse = {
  createProject: {
    _id: string;
  };
};

export type CreateProjectVariables = {
  region: Region;
};

export type CreateServiceResponse = {
  createService: {
    _id: string;
  };
};

export type CreateServiceVariables = {
  projectID: string;
  template?: ServiceTemplate;
  name: string;
};

export type GetEnvironmentResponse = {
  environments: {
    _id: string;
  }[];
};

export type GetEnvironmentVariables = {
  projectID: string;
};

export type CreateDomainResponse = {
  addDomain: {
    domain: string;
  };
};

export type CreateDomainVariables = {
  serviceID: string;
  environmentID: string;
  domain: string;
  isGenerated: false;
} | {
  serviceID: string;
  environmentID: string;
  domain: `${string}.zeabur.app`
  isGenerated: true;
};

export type DeployResponse = void | string;

export type DeployVariables = {
  code: Blob;
  project: {
    region: Region;
    id?: string;
  };
  service: {
    id?: string;
    name: string;
    template?: ServiceTemplate;
  };
  environment?: {
    id?: string;
  };
  domain?: {
    name: string;
    isGenerated: false;
  };
} | {
  code: Blob;
  project: {
    region: Region;
    id?: string;
  };
  service: {
    id?: string;
    name: string;
    template?: ServiceTemplate;
  };
  environment?: {
    id?: string;
  };
  domain?: {
    name: `${string}.zeabur.app`
    isGenerated: true;
  };
}
