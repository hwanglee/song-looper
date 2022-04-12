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

describe("format '120", () => {
  test("as time", () => {
    expect("120".formatAsTime()).toBe("2:00");
  });

  test("as seconds", () => {
    expect("120".convertToSeconds()).toBe(120);
  });
});

describe("format 'asd", () => {
  test("as time", () => {
    expect("asd".formatAsTime()).toBe(undefined);
  });

  test("as seconds", () => {
    expect("asd".convertToSeconds()).toBe(undefined);
  });
});
