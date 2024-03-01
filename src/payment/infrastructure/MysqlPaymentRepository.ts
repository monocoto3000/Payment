import { query } from "../../database/mysql";
import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";

export class MysqlPaymentRepository implements PaymentRepository {
  async getAll(): Promise<Payment[] | null> {
    const sql = "SELECT * FROM payments";
    try {
      const [data]: any = await query(sql, []);
      const dataPayments = Object.values(JSON.parse(JSON.stringify(data)));
      return dataPayments.map(
        (Payment: any) =>
          new Payment(
            Payment.id,
            Payment.name,
            Payment.concept,
            Payment.total,
            Payment.paydate,
            Payment.status
          )
      );
    } catch (error) {
      return null;
    }
  }


  async createPayment(
    name: string,
    concept: string,
    total: number
  ): Promise<Payment | null> {
    const sql =
      "INSERT INTO payments (name, concept, total) VALUES (?, ?, ?)";
    const params: any[] = [name, concept, total];
    try {
      const [result]: any = await query(sql, params);
      return new Payment(result.insertId, name, concept, total, Date.toString(), 0);
    } catch (error) {
      return null;
    }
  }
}
