import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const app = express()
app.use(express.json())

// 10. making a post request
app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  // 11. making the conection with SQL and passing the name as an object
  await knex("courses").insert({ name })

  // 13. insert with knex:
  // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])

  response.status(201).json()
})

// 14. making a get request
app.get("/courses", async (request: Request, response: Response) => {
  // 14. adding methods to see the result that we want
  const courses = await knex("courses").select().orderBy("name")

  response.json(courses)
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
