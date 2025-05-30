# Produto API

API REST para cadastro, atualização, busca paginada e exclusão de produtos. Desenvolvida com Node.js, Express, Sequelize e PostgreSQL.

---

## Tecnologias utilizadas

- Node.js (v18+)
- Express.js
- Sequelize ORM
- PostgreSQL
- Joi
- Docker + Docker Compose

---

## Configuração

### 1. Pré-requisitos

- Node.js v18+
- PostgreSQL ou Docker
- NPM ou Yarn

### 2. Clone o repositório

```bash
git clone https://github.com/cairorp/produto-api.git
cd produto-api
```

### 3. Instalar dependências

```
npm install
```

### 4. Configurar variáveis de ambiente

Crie um arquivo .env na raiz com o seguinte conteúdo:

```
DB_USER=postgres
DB_PASS=senha123
DB_NAME=teste
DB_HOST=localhost
DB_PORT=5432
```

### 5. Subir PostgreSQL com Docker (Opcional)

docker-compose up -d

### 6. Connectar ao banco e criar o schema teste

```
CREATE SCHEMA teste;
```

### 7. Rodar migrations

```
npx sequelize-cli db:migrate
```

### 8. Iniciar a aplicação

```
npm start
```

---

## Endpoints disponíveis

### 1 - POST /v1/produtos

{
  "nome": "Caneta Azul",
  "preco": 10.5,
  "descricao": "Escreve bem"
}

### 2 - PUT /v1/produtos/:id

{
  "nome": "Caneta Azul",
  "preco": 10.5,
  "descricao": "Escreve bem"
}

### 3 - DELETE /v1/produtos/:id

### 4 - GET /v1/produtos?page=1&size=5&nome=caneta&precoMin=5&precoMax=15

Parâmetros de busca:
- page: número da página (padrão: 1)

- size: itens por página (padrão: 10)

- nome: filtro parcial por nome

- descricao: filtro parcial por descrição

- preco: valor exato

- precoMin: valor mínimo

- precoMax: valor máximo

### 5 - GET /v1/produtos/:id
