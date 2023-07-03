import { Product } from "@/core/domain/entities/product";
import { User } from "@/core/domain/entities/user";
import { makePriceSatang } from "@/core/shared-kernel/types/branded-alias";
import { PaymentService } from "../ports/payment-service";
import { usePaymentAdapter } from "@/services/payment-adapter";

interface Dependencies {
  payment: PaymentService;
}

export async function userBuysProduct(
  user: User,
  product: Product,
  dependencies: Dependencies
) {
  const { payment } = dependencies;

  const tryPayRes = await payment.tryPay(user, makePriceSatang(product.price));

  return tryPayRes;
}

export function useUserBuysProductUseCase() {
  const paymentService: PaymentService = usePaymentAdapter();

  return (user: User, product: Product) =>
    userBuysProduct(user, product, { payment: paymentService });
}
