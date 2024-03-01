import { Request, Response } from "express";
import { GetAllPaymentUseCase } from "../../application/GetAllPaymentUseCase";


export class GetAllPaymentController {
  constructor(readonly getAllPaymentUseCase: GetAllPaymentUseCase) {}
  async run(req: Request, res: Response) {
    try {
      const Payments = await this.getAllPaymentUseCase.run();
      console.log(Payments);
      if (Payments)
        res.status(200).send({
          status: "success",
          data: Payments.map((Payments: any) => {
            return {
              id: Payments.id,
              username: Payments.username,
              content: Payments.content,
              date: Payments.date,
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio un error D:",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error D:",
        msn: error,
      });
    }
  }
}
