import { atom } from "recoil";
import { IAsideListItem } from "../types/listItemTypes";

export const asideListAtom = atom<IAsideListItem[]>({
  key: "asideList",
  default: [],
});

export const asideOptionAtom = atom({
  key: "asideOption",
  default: { animation: true, removePickedItem: true },
});

export const printerListAtom = atom<string[]>({
  key: "printerList",
  default: [],
});

export const isPrintingAtom = atom<boolean>({
  key: "isPrinting",
  default: false,
});
