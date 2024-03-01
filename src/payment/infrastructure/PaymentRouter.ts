import express from "express";

import { createPaymentController, getAllPaymentController } from "./dependencies";

export const PaymentRouter = express.Router();

PaymentRouter.get(
  "/",
  getAllPaymentController.run.bind(getAllPaymentController)
);

PaymentRouter.post(
  "/",
  createPaymentController.run.bind(createPaymentController)
);



