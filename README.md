# Back-end Desafio Sharenergy

API de Clientes que permite Criar, Atualizar, Buscar e Remover.

## Funcionalidades

- Criar Cliente
- Buscar Clientes
- Atualizar Clientes
- Remover Clientes
- Buscar Cliente por ID

## Instalação

Instale o backend com npm

```bash
  cd backend
  npm install
```

### Rodando o backend

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stack utilizada

**Front-end:** React, Typescript, Jotai, React Hook Form, Phosphor-react, Material UI e Axios

**Back-end:** Node, NestJS, MongoDB, Mongoose e Swagger

## Documentação da API

#### Criar cliente

```http
  POST /users
```

| Parâmetro | Tipo     | Descrição           |
| :-------- | :------- | :------------------ |
| `name`    | `string` | Nome do cliente     |
| `age`     | `number` | Idade do cliente    |
| `email`   | `string` | Email do cliente    |
| `cpf`     | `string` | Cpf do cliente      |
| `phone`   | `string` | Telefone do cliente |
| `address` | `object` | Endereço do cliente |

`Chaves do objeto Address`

| Parâmetro | Tipo     | Descrição                   |
| :-------- | :------- | :-------------------------- |
| `rua`     | `string` | Rua do cliente              |
| `numero`  | `number` | Número do imóvel do cliente |
| `bairro`  | `string` | Bairro do cliente           |
| `cidade`  | `string` | Cidade do cliente           |
| `estado`  | `string` | Estado do cliente           |

#### Buscar todos os clientes

```http
  GET /users
```

#### Buscar um cliente

```http
  GET /users/${id}
```

| Parâmetro | Tipo     | Descrição                                      |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `object` | **Obrigatório**. O ID do cliente que você quer |

#### Remover Cliente

```http
  DELETE /users/${id}
```

#### Atualizar Cliente

```http
  PUT /users/${id}
```

| Parâmetro | Tipo     | Descrição           |
| :-------- | :------- | :------------------ |
| `name`    | `string` | Nome do cliente     |
| `age`     | `number` | Idade do cliente    |
| `email`   | `string` | Email do cliente    |
| `cpf`     | `string` | Cpf do cliente      |
| `phone`   | `string` | Telefone do cliente |
| `address` | `object` | Endereço do cliente |

`Chaves do objeto Address`

| Parâmetro | Tipo     | Descrição                   |
| :-------- | :------- | :-------------------------- |
| `rua`     | `string` | Rua do cliente              |
| `numero`  | `number` | Número do imóvel do cliente |
| `bairro`  | `string` | Bairro do cliente           |
| `cidade`  | `string` | Cidade do cliente           |
| `estado`  | `string` | Estado do cliente           |

## Documentação

[Documentação com swagger](http://localhost:3000/api)

## Autor

- [@pedroygor](https://www.github.com/pedroygor)
