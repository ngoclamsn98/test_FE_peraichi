import { Action, ChangePositionAction } from "./declaration";

export const changePositionItem = (positionAction: ChangePositionAction) => {
  const index = positionAction.products.findIndex(
    (product) => product.id === positionAction.id
  );

  if (typeof index !== "number") return;

  if (index === 0 && positionAction.action === Action.PREVIOUS) return;
  const lastIndexList = positionAction.products.length - 1;
  if (index === lastIndexList && positionAction.action === Action.NEXT) return;

  const indexUpdate =
    positionAction.action === Action.PREVIOUS ? index - 1 : index + 1;
  const currentProduct = positionAction.products[index];
  currentProduct.display_order = positionAction.products[index].display_order;
  const updateProduct = positionAction.products[indexUpdate];
  updateProduct.display_order =
    positionAction.products[indexUpdate].display_order;
  const products = positionAction.products;

  products[indexUpdate] = currentProduct;
  products[index] = updateProduct;

  return products;
};
