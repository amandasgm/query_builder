
import type { Knex } from "knex";

// 5. 
export async function up(knex: Knex): Promise<void> {
  // 7. creating the table
  await knex.schema.createTable("courses", (table) => {
    // 7.1 creating the colunms of the table
    table.increments("id").primary(),
    table.text('name').notNullable(),
    table.timestamp("created_at").defaultTo(knex.fn.now()) // 7.2 creating a new column and automatic complete of data

  })
}

// 6.
export async function down(knex: Knex): Promise<void> {
  // 8. undo table courses
  await knex.schema.dropTable("courses")
}

