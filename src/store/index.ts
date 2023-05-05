import { atom } from "recoil";

export const asideListAtom = atom({
  key: "asideList",
  default: new Map(),
});

export const asideOptionAtom = atom({
  key: "asideOption",
  default: { animation: true, removePickedItem: true },
});
