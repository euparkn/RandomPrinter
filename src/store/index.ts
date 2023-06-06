import { atom } from "recoil";
import { IAsideListItem } from "../types/listItemTypes";

export const asideListAtom = atom<IAsideListItem[]>({
  key: "asideList",
  default: [
    {
      id: 1,
      text: "text 1",
      count: 1,
    },
    {
      id: 2,
      text: "text 2",
      count: 1,
    },
    {
      id: 3,
      text: "text 3",
      count: 1,
    },
  ],
});

export const asideOptionAtom = atom({
  key: "asideOption",
  default: { animation: true, darkMode: false },
});

export const printerListAtom = atom<string[]>({
  key: "printerList",
  default: [],
});
