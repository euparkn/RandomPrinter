import { atom } from "recoil";

export const listStateAtom = atom({
  key: "listState",
  default: new Map(),
});
