import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const app = express()
app.use(express.json())

// 10. making a post resquest
app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  // 11. making the conection with SQL and passing the name as an object
  await knex("courses").insert({ name })

  // 13. insert with knex:
  // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])

  response.status(201).json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
