import Image from "next/image";
import { Inter } from "next/font/google";
import { useUserBuysProductUseCase } from "@/core/application/use-cases/user-buys-product";
import { User, makeUserName } from "@/core/domain/entities/user";
import {
  Product,
  makeProductName,
  makeProductPrice,
} from "@/core/domain/entities/product";
import {
  makeEmail,
  makeUniqueId,
} from "@/core/shared-kernel/types/branded-alias";
import { useFetchProductByIdUseCase } from "@/core/application/use-cases/fetch-product-by-id";
import { useAddProductUseCase } from "@/core/application/use-cases/add-product";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const buyProduct = useUserBuysProductUseCase();
  const fetchProductById = useFetchProductByIdUseCase();
  const addProduct = useAddProductUseCase();

  const user: User = {
    id: makeUniqueId("1"),
    email: makeEmail("abc@email.com"),
    name: makeUserName("John"),
  };

  const product1: Product = {
    id: makeUniqueId("1"),
    name: makeProductName("asdf1"),
    price: makeProductPrice(200),
  };
  const product2: Product = {
    id: makeUniqueId("2"),
    name: makeProductName("asdf2"),
    price: makeProductPrice(350),
  };

  const productName = fetchProductById(makeUniqueId("1"))?.name ?? "";

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* {bears}
      <button
        onClick={() => {
          increasePopulation();
        }}
      >
        asdf
      </button> */}
      <h1>Hello World</h1>
      <p>name: {productName}</p>
      <button
        onClick={() => {
          buyProduct(user, product1);
        }}
      >
        Buy 1
      </button>
      <button
        onClick={() => {
          buyProduct(user, product2);
        }}
      >
        Buy 2
      </button>
      <button
        onClick={() => {
          addProduct(product1);
        }}
      >
        Add Product
      </button>
      <button
        onClick={() => {
          // alert(fetchProductById(makeUniqueId("1"))?.name);
        }}
      >
        debug
      </button>
    </main>
  );
}
