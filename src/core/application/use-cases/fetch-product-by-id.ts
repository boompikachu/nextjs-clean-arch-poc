import { UniqueId } from "@/core/shared-kernel/types/branded-alias";
import { StorageService } from "../ports/storage-service";
import { useStorageAdapter } from "@/services/storage-adapter";

interface Dependencies {
  storage: StorageService;
}

export function fetchProductById(id: UniqueId, dependencies: Dependencies) {
  const { storage } = dependencies;

  const selectedProduct = storage.getProduct(id);

  return selectedProduct;
}

export function useFetchProductByIdUseCase() {
  const storageService: StorageService = useStorageAdapter();

  return (id: UniqueId) => fetchProductById(id, { storage: storageService });
}
