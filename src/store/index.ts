import { atom } from "recoil";

export const asideListAtom = atom({
  key: "asideList",
  default: [],
});

export const asideOptionAtom = atom({
  key: "asideOption",
  default: { animation: true, removePickedItem: true },
});
