export interface ItemType {
  id: number;
  name: string;
  number: number;
  isChecked: boolean;
  addedAt: number;
}

export interface FormProps {
  onAddItem: (name: string, number: number) => void;
}

export interface ListProps {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
  onToggleIsChecked: (id: number) => void;
  onClearList: () => void;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

export interface ItemProps extends ItemType {
  onDeleteItem: (id: number) => void;
  onToggleIsChecked: (id: number) => void;
}

export interface FooterProps {
  items: ItemType[];
}
