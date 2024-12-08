# todo-simple

Este é um projeto simples de uma api de lista de tarefas (To-Do) utilizando Bun, Drizzle ORM, Elysia e PostgreSQL, feitos para aprender um pouco mais sobre essas tecnologias.


## Instalação

Para instalar as dependências, execute:

```bash
bun install
```

## Configuração do Banco de Dados

Certifique-se de ter um banco de dados PostgreSQL em execução. Você pode usar o Docker para isso. Para iniciar o contêiner do PostgreSQL, execute:

```bash
bun docker:up
```

Certifique-se de definir a variável de ambiente `DATABASE_URL` no arquivo `.env` com a URL de conexão do seu banco de dados PostgreSQL.

## Migrações

Para gerar e aplicar migrações, use:

```bash
bun migrate
```

Caso altere algo no schema use:

```bash
bun generate
bun migrate
```

## Seed

Para popular o banco de dados com dados iniciais, execute:

```bash
bun seed
```

## Executar o Projeto

Para iniciar o servidor em modo de desenvolvimento, execute:

```bash
bun dev
```

O servidor estará disponível em `http://localhost:3021`.



## Tecnologias Utilizadas

- [Bun](https://bun.sh)
- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)
- [Elysia](https://elysiajs.com)
- [PostgreSQL](https://www.postgresql.org)

## Documentação

A documentação da API pode ser acessada no endpoint `/swagger`, gerada automaticamente pelo plugin do Elysia Swagger. Para visualizar a documentação, inicie o servidor e acesse http://localhost:3021/swagger no seu navegador.


## Licença

Este projeto está licenciado sob a licença MIT.