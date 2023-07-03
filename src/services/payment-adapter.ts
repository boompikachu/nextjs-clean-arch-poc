import { PaymentService } from "@/core/application/ports/payment-service";
import { User } from "@/core/domain/entities/user";
import { PriceSatang } from "@/core/shared-kernel/types/branded-alias";

export function usePaymentAdapter(): PaymentService {
  return {
    tryPay(user: User, amount: PriceSatang) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          alert(`pay ${amount} by ${user.name}`);
          resolve(true);
        }, 1000);
      });
    },
  };
}
