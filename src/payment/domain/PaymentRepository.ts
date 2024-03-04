import { Payment } from "./Payment";

export interface PaymentRepository {
  createPayment(
    name: string,
    concept: string,
    total: number
  ): Promise<Payment | null>;
}

export class PaymentRepositoryImpl implements PaymentRepository {
  async createPayment(
    name: string,
    concept: string,
    total: number
  ): Promise<Payment | null> {
    return new Payment(name, concept, total);
  }
}