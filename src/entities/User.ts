import { uuid } from "uuidv4";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  // Recebe todas as propriedades omitindo a prop id, ou seja, sem id.
  // O id como parametro opcional, quer dizer que quando eu quiser pegar um user do banco e colocar ele numa variável, ele vem com id. Logo, é necessário que o id seja um parametro opcional.
  constructor(props: Omit<User, "id">, id?: string){
    Object.assign(this, props); // pega todas as propriedades de props, e joga pro objeto this
    
    if (!id) {
      this.id = uuid();
    }
  }
}