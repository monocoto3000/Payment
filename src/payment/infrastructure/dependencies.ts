import { CreatePaymentUseCase } from "../application/CreatePaymentUseCase";
import { GetAllPaymentUseCase } from "../application/GetAllPaymentUseCase";

import { MysqlPaymentRepository } from "./MysqlPaymentRepository";

import { GetAllPaymentController } from "./controllers/GetAllPaymentController";
import { CreatePaymentController } from "./controllers/CreatePaymentController";
import { AMQPMessageQueueService } from "./Adapters/AmqpQueueService";

export const mysqlPaymentRepository = new MysqlPaymentRepository();
export const amqpPaymentQueueService = new AMQPMessageQueueService("amqp://localhost:5672");

export const createPaymentUseCase = new CreatePaymentUseCase(mysqlPaymentRepository,amqpPaymentQueueService);
export const getAllPaymentUseCase = new GetAllPaymentUseCase(mysqlPaymentRepository);

export const createPaymentController = new CreatePaymentController(createPaymentUseCase);
export const getAllPaymentController = new GetAllPaymentController(getAllPaymentUseCase);


