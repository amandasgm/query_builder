
// 3. exporting default knex.ts
export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db"
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./src/database/migrations",
    extension: "ts",
  },
  seeds: {
    directory: "./src/database/seeds",
    extension: "ts",
  },
}