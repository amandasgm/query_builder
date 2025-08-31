1. installing knex.js - javascript quert builder + installing the database package
 - npm i knex sqlite

2. Migrations - an important feature for defining the structure of table in a database. Migrations allow you to create, modify and manager changes to the database over time, enabling database versioning, similar to Git for code. This practice is essencial for development teams, enabling collaborations and control of changes. **Migrations** are fundamental for creating and evolutiong database in a organized and efficient manner
- gerenciam mudanças em banco de dados

3. exporting default the configuration of knex.ts
- installing knex and the sqlite3:
**npm i knex sqlite3**

4. creating one script to understand the export default of knexfile.ts file
- running the new script to create a new migrate: **npm run knex -- migrate:make create-courses**

5. function up: responsible to create the function of send the changes and create the table
6. function down: responsible to undo (desfazer)

7. creating the table and the colums
- **table.increments("id").primary()**: crie na tabela uma coluna de id, onde terá autoincremento e será uma chave primaria
- **table.text('name').notNullable()**: crie na tabela uma coluna de nome onde será um texto que não aceita campo nulo
7.2 crating a new column call "created_at" where the type is timestamp(date + time)
- in case of null data, automatic complete with function knex now

8. delete de table courses
8.1 in terminal: **npm run knex -- migrate:latest**
** It is a Knex command that executes all pending migrations (which have not yet been applied to the database). • It creates a special table in the database (knex_migrations) to control which migrations have already been executed.

9. add updated table courses with a new column after the created_at column
9.1 always undoes the action created on "up" 
