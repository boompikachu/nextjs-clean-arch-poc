import { Product } from "@/core/domain/entities/product";
import { UniqueId } from "@/core/shared-kernel/types/branded-alias";

export interface StorageService {
  getProduct(id: UniqueId): Product | undefined;
  addProduct(product: Product): void;
}
