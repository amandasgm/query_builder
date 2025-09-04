# Query Builder - Knex

Projeto desenvolvido para explorar o uso do **Knex.js**, um *query builder* em JavaScript que facilita a criação, manutenção e versionamento de bancos de dados de forma organizada.

## 🚀 Sobre o Projeto

O objetivo é praticar **migrations, seeds e relacionamentos** entre tabelas utilizando o **Knex.js** com **SQLite** como banco de dados.  
O fluxo cobre desde a instalação, criação de tabelas, versionamento de alterações, até operações CRUD (Create, Read, Update, Delete) com testes via **Insomnia**.

## 🛠️ Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor  
- **TypeScript** – Tipagem estática e segurança em tempo de compilação  
- **Knex.js** – Query Builder para SQL  
- **SQLite3** – Banco de dados relacional leve  
- **Express** – Servidor HTTP para expor rotas da API  
- **Insomnia** – Testes de requisições HTTP  

## 📦 Funcionalidades

- **Migrations** para criar, alterar e versionar tabelas  
- **Seeds** para popular tabelas com dados de teste  
- CRUD completo de **courses** (POST, GET, PUT, DELETE)  
- Relacionamento **courses ↔ modules** via tabela pivô (`courses_modules`)  
- Execução de queries SQL equivalentes utilizando **Knex**  

## ⚡ Scripts Importantes

```bash
# Instalar dependências
npm i knex sqlite3

# Criar uma nova migration
npm run knex -- migrate:make create-courses

# Executar todas as migrations pendentes
npm run knex -- migrate:latest

# Reverter a última migration
npm run knex -- migrate:rollback

# Reverter todas as migrations
npm run knex -- migrate:rollback --all

# Criar um seed
npm run knex -- seed:make insert-courses
```
Ensinado by Rocketseat

