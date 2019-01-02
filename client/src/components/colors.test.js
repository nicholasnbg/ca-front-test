import { responseColors, getResponseColor } from "./colors";

describe("getResponseColors", () => {
  it("returns correct color", () => {
    expect(getResponseColor(0)).toBe(responseColors[0]);
    expect(getResponseColor(1.5)).toBe(responseColors[1]);
    expect(getResponseColor(2.8)).toBe(responseColors[2]);
    expect(getResponseColor(3.7)).toBe(responseColors[3]);
    expect(getResponseColor(4.9)).toBe(responseColors[4]);
    expect(getResponseColor(5)).toBe(responseColors[4]);
  });
});
