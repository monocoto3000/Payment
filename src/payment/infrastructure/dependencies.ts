import { CreatePaymentUseCase } from "../application/CreatePaymentUseCase";
import { CreatePaymentController } from "./controllers/CreatePaymentController";
import { AMQPMessageQueueService } from "./Adapters/AmqpQueueService";

import { PaymentRepositoryImpl } from "../domain/PaymentRepository";
const paymentRepository = new PaymentRepositoryImpl();

export const amqpPaymentQueueService = new AMQPMessageQueueService("amqp://34.224.23.35");
export const createPaymentUseCase = new CreatePaymentUseCase(paymentRepository, amqpPaymentQueueService);
export const createPaymentController = new CreatePaymentController(createPaymentUseCase);

