import { Product } from "@/core/domain/entities/product";
import { StorageService } from "../ports/storage-service";
import { useStorageAdapter } from "@/services/storage-adapter";

interface Dependencies {
  storage: StorageService;
}

export function addProduct(product: Product, dependencies: Dependencies) {
  const { storage } = dependencies;

  storage.addProduct(product);
}

export function useAddProductUseCase() {
  const storageService: StorageService = useStorageAdapter();

  return (product: Product) => addProduct(product, { storage: storageService });
}
