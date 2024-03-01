import { Request, Response } from "express";
import { CreatePaymentUseCase } from "../../application/CreatePaymentUseCase";

export class CreatePaymentController {
  constructor(
    private readonly createPaymentUseCase: CreatePaymentUseCase
  ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const Payment = await this.createPaymentUseCase.run(
        data.name,
        data.concept,
        data.total
      );
      if (Payment) {
        res.status(201).send({
          status: "success",
          data: {
            id: Payment?.id,
            username: Payment?.name,
            content: Payment?.concept,
            total: Payment?.total,
            date: Payment?.paydate,
            status: Payment?.status
          },
        });
      } else {
        res.status(204).send({
          status: "error",
          data: "No fue posible crear el mensaje",
        });
      }
    } catch (error: any) {
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error al crear el mensaje",
        msn: error.Payment,
      });
    }
  }
}
