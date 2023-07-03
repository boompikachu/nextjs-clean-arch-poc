import { StorageService } from "@/core/application/ports/storage-service";
import { Product } from "@/core/domain/entities/product";
import { UniqueId } from "@/core/shared-kernel/types/branded-alias";
import { useCallback, useEffect, useMemo } from "react";
import { create } from "zustand";

interface BearState {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const useStore = create<BearState>()((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      const temp = [...state.products, product];
      return { products: temp };
    }),
}));

export function useStorageAdapter(): StorageService {
  const products = useStore((store) => store.products);
  const addProduct = useStore((store) => store.addProduct);

  const getProduct = useCallback(
    (id: UniqueId) => {
      return products.find((product) => product.id === id);
    },
    [products]
  );

  return {
    getProduct,
    addProduct,
  };
}
