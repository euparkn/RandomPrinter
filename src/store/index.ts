import { atom } from "recoil";
import { IAsideListItem } from "types/listItemTypes";
import { IOptions } from "types/OptionsType";

const defaultAsideList = [
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
];

export const asideListAtom = atom<IAsideListItem[]>({
  key: "asideList",
  default: [],
  effects: [
    ({ setSelf }) => {
      const savedItem = localStorage.getItem("random-printer-list");
      if (savedItem != null) {
        setSelf(JSON.parse(savedItem));
      } else {
        setSelf(defaultAsideList);
      }
    },
  ],
});

export const optionsAtom = atom<IOptions>({
  key: "options",
  default: { animation: true, darkMode: false },
  effects: [
    ({ setSelf, onSet }) => {
      const savedItem = localStorage.getItem("random-printer-options");
      if (savedItem != null) {
        setSelf(JSON.parse(savedItem));
      }
      onSet((newValue: IOptions) => {
        localStorage.setItem(
          "random-printer-options",
          JSON.stringify(newValue)
        );
      });
    },
  ],
});

export const printerListAtom = atom<string[]>({
  key: "printerList",
  default: [],
});

export const showAsideAtom = atom<boolean>({
  key: "showAside",
  default: false,
});

export const toastAtom = atom({
  key: "toast",
  default: {
    text: "",
    state: false,
  },
});
