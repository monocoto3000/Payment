import { CreatePaymentUseCase } from "../application/CreatePaymentUseCase";
import { CreatePaymentController } from "./controllers/CreatePaymentController";
import { AMQPMessageQueueService } from "./Adapters/AmqpQueueService";

import { PaymentRepositoryImpl } from "../domain/PaymentRepository";
const paymentRepository = new PaymentRepositoryImpl();

export const amqpPaymentQueueService = new AMQPMessageQueueService("amqp://52.6.228.180/");
export const createPaymentUseCase = new CreatePaymentUseCase(paymentRepository, amqpPaymentQueueService);
export const createPaymentController = new CreatePaymentController(createPaymentUseCase);

