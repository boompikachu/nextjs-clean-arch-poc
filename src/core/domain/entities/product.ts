import { Brand } from "@/core/shared-kernel/utils/branded-types";
import { Email, UniqueId } from "@/core/shared-kernel/types/branded-alias";

export type ProductName = Brand<string, Product>;

export type Product = {
  id: UniqueId;
  name: ProductName;
};
