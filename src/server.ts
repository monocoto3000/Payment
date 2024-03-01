import express from "express";
import { Signale } from "signale";

import { PaymentRouter } from "./payment/infrastructure/PaymentRouter";

const app = express();
app.disable("x-powered-by");

const signale = new Signale();

app.use(express.json());
app.use("/payment", PaymentRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
