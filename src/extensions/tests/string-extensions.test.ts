import "../string-extensions";
import "ts-jest";

describe("format '0:03'", () => {
  test("as time", () => {
    expect("0:03".formatAsTime()).toBe("0:03");
  });

  test("as seconds", () => {
    expect("0:03".convertToSeconds()).toBe(3);
  });
});
