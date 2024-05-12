export enum Action {
  NEXT = "NEXT",
  PREVIOUS = "PREVIOUS",
  DELETE = "DELETE",
}

export interface Product {
  id: number;
  display_order: number;
  url: string;
}

export interface ChangePositionAction {
  id: number;
  action: Action;
  products: Product[];
}
