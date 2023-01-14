import { User } from "../entities/User";

export interface IUsersRepository {
  // pegar um usuário pelo email. Recebe um email e retorna um usuário
  findByEmail(email: string): Promise<User>;
  
  // salvar usuário. Recebe um usuário e não retorna nada
  save(user: User): Promise<void>;
}