import { createClient } from "zeabur";
import { createClient as internal_createClient } from "./src";

if (!Bun.env.ZEABUR_CLIENT_SECRET) {
  throw new Error("`ZEABUR_CLIENT_SECRET` is not defined");
}

const zeabur = internal_createClient(Bun.env.ZEABUR_CLIENT_SECRET);

const BUN_PROJECT_CODE = Bun.file("./projects/bun-zeabur.zip");

const deploy = () => {
  try {
    zeabur.deploy({
      code: BUN_PROJECT_CODE,
      service: {
        name: "bun-zeabur-foo",
      },
      project: {
        region: "hkg1"
      },
    })
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

deploy();
