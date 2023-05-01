export interface IListItem {
  id?: number;
  text?: string;
  count?: number;
}

export interface IListItemExtra extends IListItem {
  update: ({ id, text, count }: IListItem) => void;
  remove: ({ id }: IListItem) => void;
}
