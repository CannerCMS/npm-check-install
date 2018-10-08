import checkPkg from "../src/checkPkg";

describe("checkPkg", () => {
  it("should package jest be found", async () => {
    const hasFound = await checkPkg("jest", {});
    expect(hasFound).toBe(true);
  });

  it("should package antd not be found", async () => {
    const hasFound = await checkPkg("antd", {});
    expect(hasFound).toBe(false);
  });
});
