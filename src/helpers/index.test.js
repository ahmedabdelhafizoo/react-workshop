import { nFormatter } from "./index";

describe("nFormatter", () => {
  it("formats Large Numbers Correctly", () => {
    expect(nFormatter(1000)).toEqual({ value: "1", symbol: "K" });
    expect(nFormatter(1000000)).toEqual({ value: "1", symbol: "M" });
  });

  it("formats the number and show n digits", () => {
    expect(nFormatter(10500, 1)).toEqual({ value: "10.5", symbol: "K" });
    expect(nFormatter(10550, 2)).toEqual({ value: "10.55", symbol: "K" });
    expect(nFormatter(10560, 2)).toEqual({ value: "10.56", symbol: "K" });
  });

  it("returns the number as a string if returnString is true", () => {
    expect(nFormatter(1000, 0, true)).toEqual("1K");
    expect(nFormatter(1000000, 0, true)).toEqual("1M");
  });

  it("returns the original input if it's null", () => {
    expect(nFormatter(null)).toEqual(null);
  });
});
