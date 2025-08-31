import type { Knex } from "knex";

// 9. new column updated_at
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('course', (table) => {
    table.timestamp("updated_at").defaultTo(knex.fn.now()).after("created_at")
  })
}

// 9.1 
export async function down(knex: Knex): Promise<void> {
await knex.schema.alterTable('course', (table) => {
    table.dropColumn("updated_at")
  })}

