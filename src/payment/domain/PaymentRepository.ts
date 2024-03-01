import { Payment } from "./Payment";

export interface PaymentRepository {
  getAll(): Promise<Payment[] | null>;
  createPayment(
    name: string,
    concept: string,
    total: number
  ): Promise<Payment | null>;
}
