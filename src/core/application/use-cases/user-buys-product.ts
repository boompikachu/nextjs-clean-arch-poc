import { Product } from "@/core/domain/entities/product";
import { User } from "@/core/domain/entities/user";
import { makePriceSatang } from "@/core/shared-kernel/types/branded-alias";
import { PaymentService } from "../ports/payment-service";
import { usePayment } from "@/services/payment-adapter";

interface Dependencies {
  payment: PaymentService;
}

export function userBuysProduct(
  user: User,
  product: Product,
  dependencies: Dependencies
) {
  const { payment } = dependencies;

  payment.tryPay(user, makePriceSatang(2));

  return product;
}

export function useUserBuysProduct() {
  const paymentService = usePayment();

  return (user: User, product: Product) =>
    userBuysProduct(user, product, { payment: paymentService });
}
