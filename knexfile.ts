
// 3. exporting default knex.ts
export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db"
  },
  // 21.restrict relationship keys
  pool: {
  afterCreate: (connection: any, done: any) => {
    connection.run("PRAGMA foreign_keys = ON", (err: any) => {
      done(err, connection); // só chama depois que terminar
    });
  },
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