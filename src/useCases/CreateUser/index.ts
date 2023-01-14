// Conectando o useCase com o mailtrap
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider(); // IMailProvider
const postgresUsersRepository = new PostgresUsersRepository(); // IUsersRepository

// passando as implementações para nosso useCase
const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
)

// passando o useCase pro controller
const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController}