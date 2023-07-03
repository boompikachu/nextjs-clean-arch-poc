import { Brand, make } from "@/core/shared-kernel/utils/branded-types";
import { Email, UniqueId } from "@/core/shared-kernel/types/branded-alias";

export type ProductName = Brand<string, Product>;
export const makeProductName = make<ProductName>();

export type ProductPrice = Brand<number, Product>;
export const makeProductPrice = make<ProductPrice>();

export type Product = {
  id: UniqueId;
  name: ProductName;
  price: ProductPrice;
};
