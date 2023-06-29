import { User } from "@/core/domain/entities/user";
import { PriceSatang } from "@/core/shared-kernel/types/branded-alias";

export interface PaymentService {
  tryPay(user: User, amount: PriceSatang): Promise<boolean>;
}
