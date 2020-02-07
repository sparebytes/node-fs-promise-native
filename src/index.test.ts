import { fsp, access } from "./index";

describe("index exports", () => {
    test("fsp.access", async () => fsp.access != null);
    test("access", async () => access != null);
});
