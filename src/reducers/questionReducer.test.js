import { swapLeft, swapRight } from "../utils";

describe("swapLeft should work as expected", () => {
  it("should swap and elementto position left in a given array", () => {
    const elements = [1, 5, 6, 7];
    expect(swapLeft(elements, 5)).toEqual([5, 1, 6, 7]);
  });
  it("should swap and elementto position left in a given array", () => {
    const elements = ["6a4cb772", "1f011c92"];
    expect(swapLeft(elements, "1f011c92")).toEqual(["1f011c92", "6a4cb772"]);
  });
});

describe("swapRight should work as expected", () => {
  it("should swap and element to position right in a given array", () => {
    const elements = [1, 5, 6, 7];
    expect(swapRight(elements, 5)).toEqual([1, 6, 5, 7]);
  });
  it("should make me belive that it was so easy", () => {
    const elements = [1, 5, 6, 7, 65];
    expect(swapRight(elements, 6)).toEqual([1, 5, 7, 6, 65]);
    expect(swapRight(elements, 5)).toEqual([1, 6, 5, 7, 65]);
  });
  it("should works when only one element is in", () => {
    const elements = [1];
    expect(swapRight(elements, 1)).toEqual([1]);
  });
});
