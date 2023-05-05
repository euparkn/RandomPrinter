export interface IAsideListItem {
  id?: number;
  text?: string;
  count?: number;
}

export interface IAsideListItemExtra extends IAsideListItem {
  updateAsideList: ({ id, text, count }: IAsideListItem) => void;
  removeAsideList: ({ id }: IAsideListItem) => void;
}
