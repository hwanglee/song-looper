import "../string-extensions";
import "ts-jest";

test("format '0:03' as time", () => {
  expect("0:03".formatAsTime()).toBe("0:03");
});
