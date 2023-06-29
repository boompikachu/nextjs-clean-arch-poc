import { PaymentService } from "@/core/application/ports/payment-service";
import { User } from "@/core/domain/entities/user";
import { PriceSatang } from "@/core/shared-kernel/types/branded-alias";

export function usePayment(): PaymentService {
  return {
    tryPay(user: User, amount: PriceSatang) {
      // handle payment
      return new Promise(() => true);
    },
  };
}
