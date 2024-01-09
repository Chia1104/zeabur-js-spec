import { createClient } from "zeabur";

if (!Bun.env.ZEABUR_CLIENT_SECRET) {
  throw new Error("ZEABUR_CLIENT_SECRET is not defined");
}

const zeabur = createClient(Bun.env.ZEABUR_CLIENT_SECRET);

const BUN_PROJECT_CODE = Bun.file("./projects/bun-zeabur.zip");

const deploy = () =>
  zeabur.deploy(
    BUN_PROJECT_CODE,
    "hkg1",
    "bun-zeabur",
    "bun-zeabur"
  );

deploy();
