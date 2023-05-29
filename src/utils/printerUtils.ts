import { IAsideListItem } from "../types/listItemTypes";

export const shuffle = (list: unknown[]) => {
  const arr = [...list];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const formatList = (list: IAsideListItem[]) => {
  const arr: string[] = [];
  list.forEach((item) => {
    for (let i = 0; i < item.count; i += 1) {
      arr.push(item.text);
    }
  });
  return arr;
};

export const setPrinterList = (list: IAsideListItem[]) =>
  shuffle(formatList(list));
