import { shuffle, formatList } from "../utils/printerUtils";

describe("test shuffle", () => {
  const texts = ["1", "2", "3"];
  const unknowns = [undefined, null, false, [], {}];

  test("test texts shuffle", () => {
    expect(shuffle(texts)).toHaveLength(texts.length);
  });
  test("test unknowns shuffle", () => {
    expect(shuffle(unknowns)).toHaveLength(unknowns.length);
  });
});

it("test formatList", () => {
  const list = [
    { id: 1, text: "1", count: 1 },
    { id: 2, text: "2", count: 2 },
  ];
  expect(formatList(list)).toStrictEqual(["1", "2", "2"]);
});
