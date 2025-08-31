import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const app = express()
app.use(express.json())

// ! 10. post request: RESULT: INSERTING IN THE TABLE
app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  // 11. making the conection with SQL and passing the name as an object
  await knex("courses").insert({ name })

  // 13. insert with knex:
  // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])

  return response.status(201).json()
})

// ! 14. get request: RESULT: TABLE
app.get("/courses", async (request: Request, response: Response) => {
  // 14. adding methods to see the result that we want: 
  const courses = await knex("courses").select().orderBy("name")

  return response.json(courses)
})

// ! 15. put request: RESULT: UPDATE THE NAME 
app.put("/courses/:id", async (request: Request, response: Response) => {
  const { name } = request.body
  const { id } = request.params

  // 15.1 updating the name on the table courses where id is on then url
  await knex("courses").update({ name }).where({ id })
  
  return response.json()
})

// ! 16. delete request: RESULT: DELETING COURSES 
app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params
  await knex("courses").delete().where({ id })
  return response.json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
