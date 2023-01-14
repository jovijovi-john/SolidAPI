# API utilizando os princípios do SOLID

- `S`: Single responsability principle
  > Cada classe / arquivo da aplicação deve ter apenas uma responsabilidade. Esse arquivo deve executar apenas uma tarefa dentro da aplicação
- `O`: Open closed principle
  > Define que uma classe deve ser aberta para extensões, mas não para modificações.
- `L`: Liskov substutiton principle
  > Defende que podemos substituir implementações que uma classe depende.
- `I`: Interface segregation principle
  > Defende que não criemos interfaces muito robustas, com várias propriedades, mas sim que essa interface seja dividida em interfaces menores, tipagens menores.
- `D`: Dependency inversion principle
  > As classes que definem as ações da nossa aplicação (controllers, usecases) não devem depender de implementações, mas sim de interfaces. 

<hr>

  Na aplicação é utilizado um padrão chamado *package by feature*, onde estruturamos as pastas da nossa aplicação pelas features/funcionalidades. Por exemplo a funcionalidade de criação de usuário (CreateUser), todos os arquivos relacionados à criação de usuário ficarão nessa pasta.

<hr>

## src

- entities:

  - É a pasta referente aos models, no MVC

- repositories:

  - Repositórios são classes específicas para comunicação entre as funcionalidades da aplicação com o banco de dados

- useCases:

  - Onde ficam as funcionalidades, ações que o usuário pode executar na aplicação, a lógica, a regra de negócio

- providers:

  - É como se fosse os repositórios, so que lá é para armazenamento de dados, aqui é para comunicação com coisas externas (api, envio de email...)
  