import { atom } from "recoil";

export const listStateAtom = atom({
  key: "listState",
  default: new Map(),
});

export const asideOptionAtom = atom({
  key: "asideOption",
  default: { animation: true, removePickedItem: true },
});
