export interface IAsideListItem {
  id: number;
  text: string;
  count: number;
}

export interface IAsideListItemExtra extends IAsideListItem {
  updateListItem: ({ id, text, count }: IAsideListItem) => void;
  removeListItem: ({ id }: { id: number }) => void;
}
