import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";

export class GetAllPaymentUseCase {
  constructor(readonly PaymentRepository: PaymentRepository) {}

  async run(): Promise<Payment[] | null> {
    try {
      const result = await this.PaymentRepository.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}
